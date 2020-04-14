"""
Main JSON interface views
"""

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.utils.translation import ugettext as _
from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.views import APIView

from .views import AjaxView
from .version import inventreeVersion, inventreeInstanceName

from plugins import plugins as inventree_plugins

# Load barcode plugins
print("INFO: Loading plugins")

barcode_plugins = inventree_plugins.load_barcode_plugins()


class InfoView(AjaxView):
    """ Simple JSON endpoint for InvenTree information.
    Use to confirm that the server is running, etc.
    """

    def get(self, request, *args, **kwargs):

        data = {
            'server': 'InvenTree',
            'version': inventreeVersion(),
            'instance': inventreeInstanceName(),
        }

        return JsonResponse(data)


class BarcodeScanView(APIView):
    """
    Endpoint for handling barcode scan requests.

    Barcode data are decoded by the client application,
    and sent to this endpoint (as a JSON object) for validation.

    A barcode could follow the internal InvenTree barcode format,
    or it could match to a third-party barcode format (e.g. Digikey).

    """

    def post(self, request, *args, **kwargs):

        response = None

        barcode_data = request.data

        print("Barcode data:")
        print(barcode_data)

        if type(barcode_data) is not dict:
            response = {
                'error': _('Barcode data could not be parsed'),
            }

        else:
            # Look for a barcode plugin that knows how to handle the data
            for plugin_class in barcode_plugins:

                plugin = plugin_class()

                if plugin.validate_barcode(barcode_data):
                    
                    # Plugin should return a dict response
                    response = plugin.decode_barcode(barcode_data)
                    
                    if type(response) is dict:
                        response['success'] = _('Barcode successfully decoded')
                    else:
                        response = {
                            'error': _('Barcode plugin returned incorrect response')
                        }

                    response['plugin'] = plugin.get_name()

                    break

        if response is None:
            response = {
                'error': _('Unknown barcode format'),
            }

        # Include the original barcode data
        response['barcode_data'] = barcode_data

        return Response(response)

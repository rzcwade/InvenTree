
function showAlertOrCache(alertType, message, cache, timeout=5000) {
    if (cache) {
        sessionStorage.setItem(`inventree-${alertType}`, message);
    }
    else {
        showMessage('#' + alertType, message, timeout);

        sessionStorage.removeItem(`inventree-${alertType}`);
    }
}


/*
 * Display cached alert messages when loading a page
 */
function showCachedAlerts() {

    var styles = [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
    ];

    styles.forEach(function(style) {

        var msg = sessionStorage.getItem(`inventree-alert-${style}`);

        if (msg) {
            showMessage(msg, {
                style: style,
            });
        }
    });
}


/* 
 * Display an alert message at the top of the screen.
 * The message will contain a "close" button,
 * and also dismiss automatically after a certain amount of time.
 * 
 * arguments:
 * - message: Text / HTML content to display
 * 
 * options:
 * - style: alert style e.g. 'success' / 'warning'
 * - timeout: Time (in milliseconds) after which the message will be dismissed
 */
function showMessage(message, options={}) {

    var style = options.style || 'info';

    var timeout = options.timeout || 5000;

    // Hacky function to get the next available ID
    var id = 1;

    while ($(`#alert-${id}`).exists()) {
        id++;
    }

    var icon = '';

    if (options.icon) {
        icon = `<span class='${options.icon}></span>`;
    }

    // Construct the alert
    var html = `
    <div id='alert-${id}' class='alert alert-${style} alert-dismissible fade show' role='alert'>
        ${icon}
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
    </div>
    `;

    $('#alerts').append(html);

    // Remove the alert automatically after a specified period of time
    $(`#alert-${id}`).delay(timeout).slideUp(200, function() {
        $(this).alert(close);
    });
}

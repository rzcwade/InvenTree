import {
  Icon123,
  IconArrowMerge,
  IconBinaryTree2,
  IconBookmarks,
  IconBox,
  IconBuilding,
  IconBuildingFactory2,
  IconBuildingStore,
  IconCalendar,
  IconCalendarStats,
  IconCategory,
  IconCheck,
  IconCircleMinus,
  IconCirclePlus,
  IconClipboardList,
  IconClipboardText,
  IconCopy,
  IconCornerDownLeft,
  IconCornerUpRightDouble,
  IconCurrencyDollar,
  IconDots,
  IconDotsCircleHorizontal,
  IconExternalLink,
  IconFileUpload,
  IconFlagShare,
  IconGitBranch,
  IconGridDots,
  IconHash,
  IconLayersLinked,
  IconLink,
  IconList,
  IconListTree,
  IconMail,
  IconMapPin,
  IconMapPinHeart,
  IconMinusVertical,
  IconNotes,
  IconNumbers,
  IconPackage,
  IconPackageImport,
  IconPackages,
  IconPaperclip,
  IconPhone,
  IconPhoto,
  IconPrinter,
  IconProgressCheck,
  IconQrcode,
  IconQuestionMark,
  IconRulerMeasure,
  IconShoppingCart,
  IconShoppingCartHeart,
  IconSitemap,
  IconStack2,
  IconStatusChange,
  IconTag,
  IconTestPipe,
  IconTool,
  IconTools,
  IconTransfer,
  IconTrash,
  IconTruck,
  IconTruckDelivery,
  IconUnlink,
  IconUser,
  IconUserStar,
  IconUsersGroup,
  IconVersions,
  IconWorld,
  IconWorldCode,
  IconX
} from '@tabler/icons-react';
import { IconFlag } from '@tabler/icons-react';
import { IconSquareXFilled } from '@tabler/icons-react';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { IconArrowBigDownLineFilled } from '@tabler/icons-react';
import { IconTruckReturn } from '@tabler/icons-react';
import { IconInfoCircle } from '@tabler/icons-react';
import { IconCalendarTime } from '@tabler/icons-react';
import { Icon, IconProps } from '@tabler/icons-react';
import React from 'react';

const icons = {
  description: IconInfoCircle,
  variant_of: IconStatusChange,
  unallocated_stock: IconPackage,
  total_in_stock: IconPackages,
  minimum_stock: IconFlag,
  allocated_to_build_orders: IconTool,
  allocated_to_sales_orders: IconTruck,
  can_build: IconTools,
  ordering: IconShoppingCart,
  building: IconTool,
  category: IconBinaryTree2,
  IPN: Icon123,
  revision: IconGitBranch,
  units: IconRulerMeasure,
  keywords: IconTag,
  status: IconInfoCircle,
  info: IconInfoCircle,
  details: IconInfoCircle,
  parameters: IconList,
  stock: IconPackages,
  variants: IconVersions,
  allocations: IconBookmarks,
  bom: IconListTree,
  build: IconTools,
  build_order: IconTools,
  builds: IconTools,
  used_in: IconStack2,
  manufacturers: IconBuildingFactory2,
  suppliers: IconBuilding,
  customers: IconBuildingStore,
  purchase_orders: IconShoppingCart,
  sales_orders: IconTruckDelivery,
  return_orders: IconTruckReturn,
  shipment: IconTruckDelivery,
  scheduling: IconCalendarStats,
  test_templates: IconTestPipe,
  related_parts: IconLayersLinked,
  attachments: IconPaperclip,
  note: IconNotes,
  notes: IconNotes,
  photo: IconPhoto,
  upload: IconFileUpload,
  reject: IconX,
  select_image: IconGridDots,
  delete: IconTrash,
  packaging: IconPackage,
  packages: IconPackages,

  // Part Icons
  active: IconCheck,
  template: IconCopy,
  assembly: IconTool,
  component: IconGridDots,
  trackable: IconCornerUpRightDouble,
  purchaseable: IconShoppingCart,
  saleable: IconCurrencyDollar,
  virtual: IconWorldCode,
  inactive: IconX,
  part: IconBox,
  supplier_part: IconPackageImport,

  calendar: IconCalendar,
  external: IconExternalLink,
  creation_date: IconCalendarTime,
  location: IconMapPin,
  default_location: IconMapPinHeart,
  category_default_location: IconMapPinHeart,
  parent_default_location: IconMapPinHeart,
  default_supplier: IconShoppingCartHeart,
  link: IconLink,
  responsible: IconUserStar,
  pricing: IconCurrencyDollar,
  currency: IconCurrencyDollar,
  stocktake: IconClipboardList,
  user: IconUser,
  group: IconUsersGroup,
  check: IconCheck,
  copy: IconCopy,
  square_x: IconSquareXFilled,
  arrow_down: IconArrowBigDownLineFilled,
  transfer: IconTransfer,
  actions: IconDots,
  reports: IconPrinter,
  buy: IconShoppingCartPlus,
  add: IconCirclePlus,
  remove: IconCircleMinus,
  merge: IconArrowMerge,
  customer: IconUser,
  quantity: IconNumbers,
  progress: IconProgressCheck,
  reference: IconHash,
  serial: IconHash,
  website: IconWorld,
  email: IconMail,
  phone: IconPhone,
  sitemap: IconSitemap,
  downleft: IconCornerDownLeft,
  barcode: IconQrcode,
  barLine: IconMinusVertical,
  batch_code: IconClipboardText,
  destination: IconFlag,
  repeat_destination: IconFlagShare,
  unlink: IconUnlink
};

export type InvenTreeIconType = keyof typeof icons;
export type TablerIconType = React.ForwardRefExoticComponent<
  Omit<IconProps, 'ref'> & React.RefAttributes<Icon>
>;

/**
 * Returns a Tabler Icon for the model field name supplied
 * @param field string defining field name
 */
export function GetIcon(field: InvenTreeIconType) {
  return icons[field];
}

// Aliasing the new type name to make it distinct
type TablerIconProps = IconProps;

type InvenTreeIconProps = {
  icon: InvenTreeIconType;
  iconProps?: TablerIconProps;
};

export function InvenTreeIcon(props: InvenTreeIconProps) {
  let Icon: React.ForwardRefExoticComponent<React.RefAttributes<any>>;

  if (props.icon in icons) {
    Icon = GetIcon(props.icon);
  } else {
    console.warn(
      `Icon name '${props.icon}' is not registered with the Icon manager`
    );
    Icon = IconQuestionMark;
  }

  return <Icon {...props.iconProps} />;
}
function IconShapes(props: TablerIconProps): Element {
  throw new Error('Function not implemented.');
}

export interface IGenericObject {
  [key: string]: any;
};

export interface INavbarLink {
  label: string;
  href: any;
  variant?: string;
  isExternal?: boolean;
};
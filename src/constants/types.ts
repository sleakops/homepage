export interface IGenericObject {
  [key: string]: any;
};

export interface INavbarLink {
  label: string;
  href: any;
  variant?: string;
  isExternal?: boolean;
};

export interface IPlan {
  index: number;
  label: string;
  description: string;
  clicked: boolean;
};

export interface ICard {
  planName: string;
  pricePerMonth: number | string;
  pricePerYear?: number | string;
  discount?: number;
  features: string[];
  displayBuyButton?: boolean;
  isHighlighted?: boolean;
};
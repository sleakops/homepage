import { PAY_ANNUALLY, PAY_MOUNTHLY } from "./consts";
import { IPlan } from "./types";

export const plansPrices: IPlan[] = [
  {
    index: 0,
    label: PAY_MOUNTHLY,
    description: "No Contract",
    clicked: true,
  },
  {
    index: 1,
    label: PAY_ANNUALLY,
    description: "~20% Discount",
    clicked: false,
  },
];

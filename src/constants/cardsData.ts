import { ICard } from "./types";

const features = [
    "Exclusive Single User License",
    "Access to All Pro Components",
    "Limitless Project Implementation",
    "Regular Free Updates",
    "24/7 Dedicated Customer Support",
];


export const cardsDataPerYear: ICard[] = [
    {
        planName: 'Basic',
        pricePerMonth: 99,
        pricePerYear: 1548,
        discount: 1188,
        features: features,
        displayBuyButton: false,
        isHighlighted: false,

    },
    {
        planName: 'Standard',
        pricePerMonth: 199,
        pricePerYear: 3108,
        discount: 2388,
        features: features,
        displayBuyButton: true,
        isHighlighted: false,
    },
    {
        planName: 'Pro',
        pricePerMonth: 299,
        pricePerYear: 4668,
        discount: 3588,
        features: features,
        isHighlighted: true,
        displayBuyButton: true
    },
];

export const cardsDataPerMonth: ICard[] = [
    {
        planName: 'Basic',
        pricePerMonth: '$129 /mo',
        features: features,
        displayBuyButton: false,
        isHighlighted: false,
    },
    {
        planName: 'Business',
        pricePerMonth: '$350 /mo',
        features: features, 
        isHighlighted: true,
        displayBuyButton: true
    },
    {
        planName: 'Entrerprise',
        pricePerMonth: 'Contact Us',
        features: features,
        displayBuyButton: true,
        isHighlighted: false,
    },
];
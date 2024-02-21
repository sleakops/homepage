import { DOCS, LOGIN, SEE_A_DEMO, SOLUTIONS, BLOG, PRICING } from "./consts";

export const paths = {
    [DOCS.toLowerCase()]: 'https://docs.sleakops.com',
    [LOGIN.toLowerCase()]: 'https://console.sleakops.com/login/',
    [SEE_A_DEMO.toLowerCase()]: '/demo',
    [SOLUTIONS.toLowerCase()]: '/solutions',
    [PRICING.toLowerCase()]: '/pricing',
    [BLOG.toLowerCase()]: '/blog'
};
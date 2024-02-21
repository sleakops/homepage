import { DOCS, LOGIN, SEE_A_DEMO, SOLUTIONS, PRICING, BLOG } from "./consts";
import { paths } from "./paths";
import { INavbarLink } from "./types";

const navbarLinks: INavbarLink[] = [
    {
        label: SOLUTIONS,
        href: paths[SOLUTIONS.toLowerCase()],
    },
    {
        label: DOCS,
        href: paths[DOCS.toLowerCase()],
        isExternal: true
    },
    {
        label: PRICING,
        href: paths[PRICING.toLowerCase()],
    },
    {
        label: BLOG,
        href: paths[BLOG.toLowerCase()],
    },
];

const navbarButtons: INavbarLink[] = [
    {
        label: LOGIN,
        href: paths[LOGIN.toLowerCase()],
        variant: 'ghost',
        isExternal: true
    }, 
    {
        label: SEE_A_DEMO,
        href: paths[SEE_A_DEMO.toLowerCase()],
        variant: 'primary'
    }
];

export {
    navbarLinks,
    navbarButtons
};
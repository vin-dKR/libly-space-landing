export type NavLink = {
    label: string;
    type: 'scroll' | 'page';
    target: string;
};

export type NavButton = {
    label: string;
    variant: 'outline' | 'default';
    href: string;
    type: 'page' | 'external';
};

export type NavbarData = {
    logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
        href: string;
    };
    brand: {
        name: string;
        accent: string;
    };
    navLinks: NavLink[];
    buttons: NavButton[];
    mobileLinks: NavLink[];
};

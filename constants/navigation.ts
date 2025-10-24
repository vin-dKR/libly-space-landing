import type { NavbarData } from "@/types/navigation";

export const navbarData: NavbarData = {
    logo: {
        src: "/images/libly-space-logo.png",
        alt: "libly-space-logo",
        width: 30,
        height: 30,
        href: "/"
    },
    brand: {
        name: "libly",
        accent: "space"
    },
    navLinks: [
        {
            label: 'Features',
            type: 'scroll',
            target: 'features'
        },
        {
            label: 'Pricing',
            type: 'scroll',
            target: 'pricing'
        },
        {
            label: 'How It Works',
            type: 'scroll',
            target: 'how-it-works'
        }
    ],
    buttons: [
        {
            label: 'Log In',
            variant: 'outline',
            href: 'https://app.libly.space',
            type: 'external'
        },
        {
            label: 'Get Started',
            variant: 'default',
            href: '/pricing',
            type: 'page'
        }
    ],
    mobileLinks: [
        {
            label: 'Features',
            type: 'scroll',
            target: 'features'
        },
        {
            label: 'Pricing',
            type: 'scroll',
            target: 'pricing'
        }
    ]
};

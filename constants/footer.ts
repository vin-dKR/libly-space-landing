export type FooterLink = {
    label: string;
} & (
        | { type: 'scroll'; target: string } // For section scrolling
        | { type: 'page'; href: string }     // For page navigation
        | { type: 'external'; href: string } // For external links
        | { type: 'email'; href: string }    // For email links
    );

export type FooterSection = {
    title: string;
    links: FooterLink[];
};

export type ContactInfo = {
    icon: string;
    title: string;
    value: string;
    type?: 'email' | 'website' | 'phone';
};

export type FooterData = {
    brand: {
        badge: string;
        name: string;
        description: string;
        status: string;
    };
    sections: FooterSection[];
    contactInfo: ContactInfo[];
    legal: FooterLink[];
    additionalInfo: string;
};

export const footerData: FooterData = {
    brand: {
        badge: "📚 MODERN LIBRARY MANAGEMENT",
        name: "Libly",
        description: "Modern library and study hall management system designed for administrators who want to move beyond paper registers and spreadsheets.",
        status: "All systems operational"
    },
    sections: [
        {
            title: "Product",
            links: [
                { label: 'Features', type: 'scroll', target: 'features' },
                { label: 'Pricing', type: 'scroll', target: 'pricing' },
                { label: 'How It Works', type: 'scroll', target: 'how-it-works' },
                { label: 'Login', type: 'external', href: 'https://app.libly.space' }
            ]
        },
        {
            title: "Company",
            links: [
                { label: 'About Us', type: 'page', href: '/about-us' },
                { label: 'Contact', type: 'page', href: '/contact' },
                { label: 'Support', type: 'email', href: 'mailto:support@libly.space' },
                { label: 'Careers', type: 'page', href: '/careers' }
            ]
        },
        {
            title: "Customer Care",
            links: [
                { label: 'Privacy Policy', type: 'page', href: '/privacy-policy' },
                { label: 'Refunds & Returns', type: 'page', href: '/refund_returns' },
                { label: 'Terms & Conditions', type: 'page', href: '/terms-conditions' },
                { label: 'Shipping Policy', type: 'page', href: '/shipping-policy' }
            ]
        }
    ],
    contactInfo: [
        {
            icon: '📧',
            title: 'Email',
            value: 'support@libly.space',
            type: 'email'
        },
        {
            icon: '🌐',
            title: 'Website',
            value: 'www.libly.space',
            type: 'website'
        },
        {
            icon: '⏰',
            title: 'Support Hours',
            value: '24/7 Available'
        }
    ],
    legal: [
        { label: 'Privacy Policy', type: 'page', href: '/privacy-policy' },
        { label: 'Terms of Service', type: 'page', href: '/terms-conditions' }
    ],
    additionalInfo: "Designed for modern educational institutions • Built with cutting-edge technology • Secure & Reliable"
} as const;

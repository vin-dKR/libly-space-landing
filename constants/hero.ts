import type { HeroData } from "@/types/hero";

export const heroData: HeroData = {
    background: {
        gradient: "bg-gradient-to-br from-gray-50 via-white to-gray-100",
        elements: [
            {
                position: "top-20 left-10",
                size: "w-72 h-72",
                color: "bg-blue-500/5",
                blur: "blur-3xl",
                animation: "animate-pulse"
            },
            {
                position: "bottom-20 right-10",
                size: "w-96 h-96",
                color: "bg-green-500/5",
                blur: "blur-3xl",
                animation: "animate-pulse delay-1000"
            }
        ]
    },
    trustBadge: {
        content: "Now Worldwide",
        icon: "⭐"
    },
    headline: {
        part1: "Manage Your Library",
        part2: "Effortlessly.",
        gradient: "bg-gradient-to-r from-black to-gray-700"
    },
    description: "The all-in-one Library Management Platform designed for modern study libraries. Track students, manage memberships, handle payments, and monitor seat usage in real-time.",
    buttons: [
        {
            label: "Get Started Free",
            variant: "primary",
            icon: "🚀",
            href: "/pricing"
        },
        {
            label: "See How It Works",
            variant: "secondary",
            icon: "📺",
            onClick: () => {
                const element = document.getElementById('how-it-works');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    ],
    trialBadge: {
        content: "No credit card required • ",
        icon: "💳"
    },
    dashboard: {
        image: {
            src: "/images/libly-space-dash.png",
            alt: "Libly Space Dashboard",
            width: 1200,
            height: 675
        },
        stats: [
            {
                value: "99.9%",
                label: "Uptime",
                position: "top-left"
            },
            {
                value: "Try Now",
                label: "Start Managing Smarter",
                position: "bottom-right"
            }
        ],
        floatingElements: [
            {
                position: "-left-8 top-1/4",
                size: "w-4 h-4",
                color: "bg-blue-500",
                animationDelay: ""
            },
            {
                position: "-right-6 bottom-1/3",
                size: "w-3 h-3",
                color: "bg-green-500",
                animationDelay: "delay-500"
            }
        ]
    },
    scrollIndicator: {
        enabled: true
    }
};

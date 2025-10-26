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
        content: "Simplify Library Operation",
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
            href: "https://app.libly.space/signup"
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
        content: "Free for Small Libraries •",
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
                value: "24/7",
                label: "Active Support",
                position: "top-edge-right",
                icon: "💬"
            },
            {
                value: "₹89.5K",
                label: "Monthly Collection",
                position: "right-edge-top",
                icon: "💰"
            },
            {
                value: "12",
                label: "Expiring Soon",
                position: "left-edge-bottom",
                icon: "⏰"
            },
            {
                value: "342",
                label: "Active Members",
                position: "right-edge-bottom",
                icon: "👥"
            },
            {
                value: "94%",
                label: "Seat Occupancy",
                position: "bottom-edge-left",
                icon: "💺"
            },
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
            },
            {
                position: "left-1/4 top-8",
                size: "w-2 h-2",
                color: "bg-purple-500",
                animationDelay: "delay-200"
            },
            {
                position: "right-1/4 bottom-8",
                size: "w-3 h-3",
                color: "bg-orange-500",
                animationDelay: "delay-700"
            }
        ]
    },
    scrollIndicator: {
        enabled: true
    }
};

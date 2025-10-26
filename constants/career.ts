import type { CareerPageData } from "@/types/career";

export const careerData: CareerPageData = {
    header: {
        badge: "JOIN OUR TEAM",
        title: "Build the Future of Library Management",
        subtitle: "Help us transform how libraries and study halls operate worldwide"
    },
    introduction: {
        title: "Why Work at Libly Space?",
        description: "We're on a mission to modernize library management through cutting-edge technology. While we're not currently hiring, we're always looking for passionate individuals who share our vision for revolutionizing education technology."
    },
    currentStatus: {
        title: "Current Openings",
        message: "We don't have any open positions at the moment, but we're growing fast! Check back soon for opportunities to join our team.",
        icon: "📋"
    },
    benefits: [
        {
            icon: "💻",
            title: "Remote First",
            description: "Work from anywhere with flexible hours and a distributed team culture"
        },
        {
            icon: "🚀",
            title: "Growth Opportunities",
            description: "Learn and grow with a fast-scaling startup in the ed-tech space"
        },
        {
            icon: "🛠️",
            title: "Modern Tech Stack",
            description: "Work with Next.js, TypeScript, Tailwind CSS and other cutting-edge technologies"
        },
        {
            icon: "📈",
            title: "Impact-Driven",
            description: "Make a real difference in how educational institutions manage their operations"
        },
        {
            icon: "🎯",
            title: "Ownership & Autonomy",
            description: "Take ownership of projects and see your ideas come to life"
        },
        {
            icon: "🌎",
            title: "Global Reach",
            description: "Build products used by libraries and educational institutions worldwide"
        }
    ],
    culture: {
        title: "Our Culture",
        description: "We believe in creating an environment where innovation thrives and team members can do their best work.",
        values: [
            "Customer-obsessed approach",
            "Continuous learning and improvement",
            "Transparent communication",
            "Work-life balance",
            "Diversity and inclusion",
            "Data-driven decisions"
        ]
    },
    contact: {
        title: "Still Interested?",
        description: "Even though we're not hiring right now, we'd love to hear from passionate individuals. Send us your resume and we'll keep you in mind for future opportunities.",
        email: "liblyspace@gmail.com"
    }
};

import type { AboutPageData } from "@/types/about";

export const aboutData: AboutPageData = {
    header: {
        badge: "ABOUT US",
        title: "Revolutionizing Library & Study Hall Management",
        subtitle: "We're building the modern operating system for educational spaces"
    },
    mission: {
        title: "Our Mission",
        description: "Libly.Space is a modern B2B SaaS platform built for owners and administrators of private study halls, coaching centers, and academic libraries who are tired of managing operations with manual registers or messy Excel sheets."
    },
    whatWeDo: {
        title: "What We Do",
        description: "It's not a book management system — it's a smart Library/Study Hall Management System that helps you track students, seats, shifts, and payments — all from one clean, secure, and easy-to-use dashboard.",
        features: [
            {
                icon: "👀",
                title: "Real-time Visibility",
                description: "See real-time seat occupancy and availability at a glance"
            },
            {
                icon: "🔄",
                title: "Multi-shift Management",
                description: "Manage multiple shifts and fee structures effortlessly"
            },
            {
                icon: "📊",
                title: "Student Tracking",
                description: "Track student attendance, payments, and dues automatically"
            },
            {
                icon: "📈",
                title: "Smart Insights",
                description: "Get instant insights and reports — no spreadsheets, no stress"
            },
            {
                icon: "🔒",
                title: "Secure & Paperless",
                description: "Keep your operations organized, secure, and 100% paperless"
            },
            {
                icon: "⚡",
                title: "Streamlined Operations",
                description: "Automate daily tasks and focus on growing your business"
            }
        ]
    },
    whyWeExist: {
        title: "Why We Exist",
        description: "We saw educational institutions struggling with outdated systems and knew there had to be a better way.",
        problems: [
            "Manual register entries leading to errors and lost data",
            "Excel sheets becoming unmanageable as operations grow",
            "No real-time visibility into seat occupancy and availability",
            "Difficulty tracking payments and managing multiple fee structures",
            "Time-consuming administrative tasks taking away from core operations",
            "Lack of proper reporting and insights for business decisions"
        ]
    },
    values: {
        title: "Our Values",
        items: [
            {
                title: "Simplicity First",
                description: "We believe powerful tools should be easy to use. No complex setups, no steep learning curves."
            },
            {
                title: "Customer Obsession",
                description: "We're building for real users with real problems. Your success is our success."
            },
            {
                title: "Innovation Driven",
                description: "We constantly push to make library management smarter, faster, and more efficient."
            },
            {
                title: "Reliability Matters",
                description: "Your data is secure, and our platform is built to work when you need it most."
            }
        ]
    },
    contact: {
        title: "Ready to Modernize Your Operations?",
        description: "Join hundreds of libraries and study halls that have transformed their operations with Libly.Space",
        email: "hello@libly.space"
    }
};

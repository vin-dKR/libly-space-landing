import type { ContactPageData } from "@/types/contact";

export const contactData: ContactPageData = {
    header: {
        badge: "GET IN TOUCH",
        title: "We're Here to Help",
        subtitle: "Have questions about Libly.Space? Our team is ready to assist you with any inquiries."
    },
    contactMethods: [
        {
            icon: "📧",
            title: "Email Us",
            description: "Send us an email and we'll respond within 24 hours",
            value: "liblyspace@gmail.com",
            type: 'email'
        },
        {
            icon: "🌐",
            title: "Visit Our Website",
            description: "Explore our features and learn more about Libly.Space",
            value: "www.libly.space",
            type: 'website'
        },
        {
            icon: "🛠️",
            title: "Technical Support",
            description: "Get help with technical issues and platform questions",
            value: "liblyspace@gmail.com",
            type: 'support'
        },
        {
            icon: "💼",
            title: "Business Inquiries",
            description: "Partnerships, enterprise plans, and custom solutions",
            value: "liblyspace@gmail.com",
            type: 'email'
        }
    ],
    form: {
        title: "Send us a message",
        description: "Fill out the form below and we'll get back to you as soon as possible."
    },
    supportInfo: {
        title: "Quick Support",
        features: [
            "24-48 hour response time",
            "Technical support included with all plans",
            "Dedicated account manager for Pro users",
            "Setup assistance and onboarding support",
            "Regular platform updates and new features"
        ]
    }
};

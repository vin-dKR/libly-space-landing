import {
    CheckCircle2,
    Zap,
    Cloud,
    Shield,
    PhoneCall,
    LucideIcon
} from "lucide-react";

export interface WhyChoosePoint {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
}

export const whyChoosePoints: WhyChoosePoint[] = [
    {
        id: 1,
        icon: CheckCircle2,
        title: "Made for Study Libraries and Hall",
        description: "Built with the needs of Indian library owners in mind — from flexible memberships to easy payment tracking and shift-based seat allocation."
    },
    {
        id: 2,
        icon: Zap,
        title: "Simple Yet Powerful",
        description: "No complex setup, no tech headaches. Just an intuitive platform that delivers powerful control and insights."
    },
    {
        id: 3,
        icon: Cloud,
        title: "Cloud-Based Access",
        description: "Manage your from anywhere, on any device. Easy and no installation required."
    },
    {
        id: 4,
        icon: Shield,
        title: "Secure & Reliable",
        description: "Your data is protected with industry-standard security. You can trust Libly Space to handle sensitive student and payment information safely."
    },
    {
        id: 5,
        icon: PhoneCall,
        title: "Dedicated Support",
        description: "Our support team is always ready to help — we're just a call or message away."
    }
];

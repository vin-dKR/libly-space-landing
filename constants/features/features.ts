import {
    CreditCard,
    Users,
    Armchair,
    Clock,
    BarChart3,
    Download,
    LucideIcon
} from "lucide-react";

export interface Feature {
    id: number
    title: string
    description: string
    icon: LucideIcon
    iconColor: string
}

export const featuresList: Feature[] = [
    {
        id: 1,
        title: "Payment and Membership Tracking",
        description: "Record and manage all membership payments effortlessly. Auto calculate membership expiry, validity and renewals. Generate and share receipt through WhatsApp.",
        icon: CreditCard,
        iconColor: "bg-blue-500"
    }, {
        id: 2,
        title: "Student Management",
        description: "Complete student profiles with their contact details, membership status, library details and payment history — accessible anytime.",
        icon: Users,
        iconColor: "bg-sky-500"
    }, {
        id: 3,
        title: "Real-Time Seat Management",
        description: "Know exactly which seats are occupied, reserved, or available at any moment. Easily assign and reassign seats to the students — Perfect for big libraries.",
        icon: Armchair,
        iconColor: "bg-blue-600"
    }, {
        id: 4,
        title: "Multiple Shift Management",
        description: "Handle different shifts and time slots without confusion. Assign, track, and manage schedules with full flexibility.",
        icon: Clock,
        iconColor: "bg-blue-400"
    }, {
        id: 5,
        title: "Smart Dashboard & Reports",
        description: "Get a 360° view of your library operations. Access data-driven insights, performance analytics, and instant reports that help you make better decisions.",
        icon: BarChart3,
        iconColor: "bg-sky-600"
    }, {
        id: 6,
        title: "Import your Library Data",
        description: "Seamlessly bring your existing student, shift, and payment records into Libly Space. Just upload your Excel sheet — your entire setup is ready.",
        icon: Download,
        iconColor: "bg-blue-500"
    }
]

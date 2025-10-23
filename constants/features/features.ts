export interface Feature {
    id: number
    title: string
    description: string
}

export const featuresList: Feature[] = [
    {
        id: 1,
        title: "Payment and Membership Tracking",
        description: "Record and manage all membership payments effortlessly. Auto calculate membership expiry, validity and renewals. Generate and share recite through WhatsApp."
    }, {
        id: 2,
        title: "Student Management",
        description: "Complete student profiles with their contact details, membership status, library details and payment history — accessible anytime."
    }, {
        id: 3,
        title: "Real-Time Seat Management",
        description: "Know exactly which seats are occupied, reserved, or available at any moment. Easily assign and reassign seats to the students — Perfect for big libraries."
    }, {
        id: 4,
        title: "Multiple Shift Management",
        description: "Handle different shifts and time slots without confusion. Assign, track, and manage schedules with full flexibility."
    }, {
        id: 5,
        title: "Smart Dashboard & Reports",
        description: "Get a 360° view of your library operations. Access data-driven insights, performance analytics, and instant reports that help you make better decisions. "
    }, {
        id: 6,
        title: "Import your Library Data",
        description: "Easily import your existing library data with all your students, shifts, fees, etc… — Upload a excel sheet with all your students data and you are ready to use our platform."
    }
]

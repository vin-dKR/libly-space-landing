import type { LegalPageData } from "./terms-conditions";

export const shippingPolicyData: LegalPageData = {
    header: {
        badge: "SHIPPING POLICY",
        icon: "Truck",
        title: "Shipping Policy",
        subtitle: "Last Updated: October 24, 2025",
        lastUpdated: "October 24, 2025"
    },
    introduction: "Libly Space is a cloud-based SaaS platform designed for managing study libraries and study halls. As a digital service, we do not provide physical products or require physical shipping. This Shipping Policy clarifies how our services are delivered to you.",
    sections: [
        {
            title: "1. Digital Delivery",
            content: `• Service Access: Upon successful subscription and payment through Razorpay, access to Libly Space is provided instantly via our web platform or mobile application (if available).
• No Physical Shipping: As a digital service, no physical goods are shipped. All features, including student data management, membership payment tracking, real-time seat allotment, and shift management, are accessible online.`
        },
        {
            title: "2. Availability",
            content: `• The Service is available immediately after account setup and payment confirmation, subject to internet connectivity and device compatibility.
• Any delays in access due to payment processing (via Razorpay) or technical issues will be addressed promptly. Contact us if access is not granted within 24 hours of payment.`
        },
        {
            title: "3. System Requirements",
            content: `To use Libly Space, ensure you have:

• A compatible device (e.g., computer, tablet, or smartphone).
• A stable internet connection.
• A modern web browser (e.g., Chrome, Firefox, or Safari) for accessing the Next.js-based platform.

We are not responsible for delays or issues caused by your failure to meet these requirements.`
        },
        {
            title: "4. Service Interruptions",
            content: `• Scheduled maintenance or unforeseen technical issues may temporarily affect access. We will notify you of planned outages in advance via email or the platform.
• If the Service is unavailable for more than 48 consecutive hours due to issues within our control, you may be eligible for a pro-rated refund as per our Returns and Refunds Policy.`
        },
        {
            title: "5. Changes to This Policy",
            content: "We may update this policy to reflect changes in our Service. Updates will be posted on our website, and continued use constitutes acceptance. Significant changes will be communicated via email or the Service."
        }
    ],
    contact: {
        title: "Need Help with Service Access?",
        description: "If you have any questions about accessing our service or this shipping policy, please contact our support team.",
        email: "liblyspace@gmail.com",
        buttonText: "Get Support"
    },
    footerNote: "Instant digital delivery for seamless library management experience"
};



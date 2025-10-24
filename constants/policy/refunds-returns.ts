export type LegalSection = {
    title: string;
    content: string;
};

export type LegalPageData = {
    header: {
        badge: string;
        icon: string;
        title: string;
        subtitle: string;
        lastUpdated: string;
    };
    introduction: string;
    sections: LegalSection[];
    contact: {
        title: string;
        description: string;
        email: string;
        buttonText: string;
    };
    footerNote: string;
};


export const refundsReturnsData: LegalPageData = {
    header: {
        badge: "RETURNS & REFUNDS",
        icon: "RefreshCw",
        title: "Returns and Refunds Policy",
        subtitle: "Last Updated: October 24, 2025",
        lastUpdated: "October 24, 2025"
    },
    introduction: "Libly Space, a SaaS platform for managing study libraries and study halls, is committed to ensuring customer satisfaction. This Returns and Refunds Policy outlines the conditions under which you may request a refund for your subscription to our services (the \"Service\"). Please read this policy carefully before subscribing.",
    sections: [
        {
            title: "1. Subscription Overview",
            content: "Libly Space operates on a subscription model (monthly, quarterly, half yearly or annual plans) with payments processed through Razorpay, our third-party payment provider. All fees are charged in advance and are non-refundable except as specified below."
        },
        {
            title: "2. Refund Eligibility",
            content: `We offer refunds under the following circumstances:

• Trial Period: If you are on a free trial (if offered), you may cancel at any time during the trial without charge. No refunds apply if you continue past the trial.
• Service Failure: If the Service is unavailable for more than 48 consecutive hours due to issues within our control (excluding scheduled maintenance or force majeure), you may request a pro-rated refund for the downtime.
• Billing Errors: Refunds will be issued for overcharges or duplicate charges caused by errors in our billing system or Razorpay.

Refunds are not available for:

• Change of mind or dissatisfaction after the trial period (if applicable).
• Partial use of a subscription period.
• Failure to cancel a subscription before renewal (if applicable).
• Violations of our Terms and Conditions.`
        },
        {
            title: "3. Refund Process",
            content: `To request a refund:

1. Contact us at liblyspace@gmail.com within 7 days of the charge or issue.
2. Provide your account details, payment details, subscription plan, and reason for the refund request.
3. If approved, refunds will be processed via Razorpay to your original payment method within 7-14 business days.

Processing times may vary depending on your bank or payment provider. Razorpay's terms may apply to transaction reversals.`
        },
        {
            title: "4. Cancellation",
            content: "You may cancel your subscription at any time via your account settings on the Libly Space platform or by contacting our support team. Cancellation takes effect at the end of the current billing cycle, and no pro-rated refunds are provided for unused portions."
        },
        {
            title: "5. Non-Refundable Fees",
            content: `• Taxes, transaction fees, or other charges imposed by Razorpay or applicable laws are non-refundable.
• Promotional or discounted subscriptions are non-refundable unless otherwise stated at the time of purchase.`
        },
        {
            title: "6. Disputes",
            content: "If you believe a charge was unauthorized or incorrect, contact us immediately. For disputes unresolved with us, you may contact Razorpay's support or the Data Protection Board of India for related privacy or billing concerns."
        },
        {
            title: "7. Changes to This Policy",
            content: "We may update this policy at our discretion. Changes will be posted on our website, and continued use of the Service constitutes acceptance. We will notify you of significant changes via email or the Service."
        }
    ],
    contact: {
        title: "Need Help with Refunds?",
        description: "If you have any questions about our refund policy or need to request a refund, please contact our support team.",
        email: "liblyspace@gmail.com",
        buttonText: "Contact Support"
    },
    footerNote: "We're committed to fair and transparent refund practices for all our customers"
};

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


export const termsConditionsData: LegalPageData = {
    header: {
        badge: "TERMS & CONDITIONS",
        icon: "Scale",
        title: "Terms & Conditions",
        subtitle: "Last Updated: October 24, 2025",
        lastUpdated: "October 24, 2025"
    },
    introduction: "Welcome to Libly Space, a SaaS platform designed for library administrators and owners to manage study libraries and study halls. By accessing or using our services (the \"Service\"), you agree to be bound by these Terms and Conditions (\"Terms\"). If you do not agree, please do not use the Service.",
    sections: [
        {
            title: "1. Acceptance of Terms",
            content: `By creating an account, subscribing, or using Libly Space, you confirm that you have read, understood, and agree to these Terms, our Privacy Policy, and any other applicable policies. These Terms form a legally binding agreement between you ("User," "you," or "your") and Libly Space ("we," "us," or "our").

We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.`
        },
        {
            title: "2. Eligibility",
            content: "You must be at least 18 years old or the age of majority in your jurisdiction to use the Service. By using Libly Space, you represent that you meet these requirements and have the authority to enter into these Terms on behalf of any entity you represent (e.g., a library or organization)."
        },
        {
            title: "3. Account Registration and Security",
            content: `To access certain features, you must create an account. You agree to:

• Provide accurate, current, and complete information during registration.
• Maintain the confidentiality of your account credentials.
• Notify us immediately of any unauthorized access or security breach.
• Be solely responsible for all activities under your account.

We reserve the right to suspend or terminate accounts that violate these Terms.`
        },
        {
            title: "4. Service Description",
            content: `Libly Space is a cloud-based SaaS application built with Next.js, enabling users to:

• Manage and track student data, including details and records.
• Handle membership payments and subscriptions.
• Manage and track library membership expiry, validity and renewal.
• Allot seats in real-time.
• Manage multiple shifts for library operations.

The Service is provided on an "as-is" and "as-available" basis. We do not guarantee uninterrupted access, error-free operation, or compatibility with all devices.`
        },
        {
            title: "5. Subscription and Payment",
            content: `Libly Space operates on a subscription model. Details on plans, pricing, and features are available on our website.

• Subscriptions are billed in advance on a recurring basis (monthly or annually, as selected).
• Payments are processed via third-party providers. You authorize us to charge your payment method.
• All fees are non-refundable except as outlined in our Returns and Refunds Policy.
• We may change pricing with notice. Continued use after changes implies acceptance.

Taxes, if applicable, are your responsibility.`
        },
        {
            title: "6. User Content and Data",
            content: `You retain ownership of any data, information, or content you upload or input into the Service ("User Content"). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and process it as necessary to provide the Service.

You represent that:

• You have all rights to User Content.
• User Content does not violate any laws, infringe third-party rights, or contain harmful material.

We are not responsible for User Content. You agree to comply with data protection laws when handling personal data of students or members.`
        },
        {
            title: "7. Prohibited Conduct",
            content: `You agree not to:

• Use the Service for illegal purposes or in violation of any law.
• Reverse engineer, decompile, or attempt to access the source code of the Service.
• Upload viruses, malware, or disruptive code.
• Harass, spam, or impersonate others.
• Interfere with the Service's operation or other users' access.
• Collect or harvest data without permission.

Violation may result in immediate termination of your account without refund.`
        },
        {
            title: "8. Intellectual Property",
            content: `All rights, title, and interest in the Service, including software, designs, trademarks, and content (excluding User Content), are owned by Libly Space or our licensors. You are granted a limited, non-transferable license to use the Service for its intended purpose during your subscription.

You may not copy, modify, distribute, or create derivative works from the Service without our written consent.`
        },
        {
            title: "9. Data Privacy and Security",
            content: `We handle your data in accordance with our Privacy Policy. You are responsible for securing your own systems and complying with relevant laws when using the Service.

We implement reasonable security measures but cannot guarantee absolute security. You agree to back up your data regularly.`
        },
        {
            title: "10. Termination",
            content: `We may terminate or suspend your access at any time for violation of these Terms, non-payment, or other reasons, with or without notice.

Upon termination:

• Your license to use the Service ends.
• We may delete your data after a reasonable period (e.g., 90 days).
• Outstanding fees remain payable.

You may terminate your subscription via your account settings, but no refunds for partial periods.`
        },
        {
            title: "11. Disclaimers and Limitation of Liability",
            content: `THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.

WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, PROFITS, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF SUCH POSSIBILITY.

OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.`
        },
        {
            title: "12. Indemnification",
            content: "You agree to indemnify and hold us harmless from any claims, losses, or damages arising from your use of the Service, violation of these Terms, or infringement of third-party rights."
        },
        {
            title: "13. Governing Law and Dispute Resolution",
            content: `These Terms are governed by the laws of India, without regard to conflict of laws principles.

Any disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act 1996, or in a court of competent jurisdiction in Jharkhand if arbitration is unenforceable.`
        },
        {
            title: "14. Miscellaneous",
            content: `• Severability: If any provision is invalid, the remainder remains in effect.
• Waiver: No waiver of any term is binding unless in writing.
• Assignment: We may assign these Terms; you may not without our consent.
• Force Majeure: We are not liable for delays due to events beyond our control.
• Entire Agreement: These Terms constitute the full agreement.`
        }
    ],
    contact: {
        title: "Questions About Our Terms?",
        description: "If you have any questions or concerns about these Terms and Conditions, please don't hesitate to contact us.",
        email: "liblyspace@gmail.com",
        buttonText: "Download PDF"
    },
    footerNote: "By using Libly Space, you acknowledge that you have read and agree to these Terms and Conditions"
};

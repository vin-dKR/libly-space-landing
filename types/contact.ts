export type ContactMethod = {
    icon: string;
    title: string;
    description: string;
    value: string;
    type: 'email' | 'website' | 'support';
};

export type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export type ContactPageData = {
    header: {
        badge: string;
        title: string;
        subtitle: string;
    };
    contactMethods: ContactMethod[];
    form: {
        title: string;
        description: string;
    };
    supportInfo: {
        title: string;
        features: string[];
    };
};

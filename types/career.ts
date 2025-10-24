export type CareerBenefit = {
    icon: string;
    title: string;
    description: string;
};

export type CareerPageData = {
    header: {
        badge: string;
        title: string;
        subtitle: string;
    };
    introduction: {
        title: string;
        description: string;
    };
    currentStatus: {
        title: string;
        message: string;
        icon: string;
    };
    benefits: CareerBenefit[];
    culture: {
        title: string;
        description: string;
        values: string[];
    };
    contact: {
        title: string;
        description: string;
        email: string;
    };
};

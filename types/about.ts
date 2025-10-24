export type Feature = {
    icon: string;
    title: string;
    description: string;
};

export type Value = {
    title: string;
    description: string;
};

export type TeamMember = {
    name: string;
    role: string;
    description: string;
};

export type AboutPageData = {
    header: {
        badge: string;
        title: string;
        subtitle: string;
    };
    mission: {
        title: string;
        description: string;
    };
    whatWeDo: {
        title: string;
        description: string;
        features: Feature[];
    };
    whyWeExist: {
        title: string;
        description: string;
        problems: string[];
    };
    values: {
        title: string;
        items: Value[];
    };
    team?: {
        title: string;
        members: TeamMember[];
    };
    contact: {
        title: string;
        description: string;
        email: string;
    };
};

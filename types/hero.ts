export type HeroBadge = {
    content: string;
    icon: string;
};

export type HeroButton = {
    label: string;
    variant: 'primary' | 'secondary';
    icon: string;
    href?: string;
    onClick?: () => void;
};

export type HeroStat = {
    value: string;
    label: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export type HeroFloatingElement = {
    position: string;
    size: string;
    color: string;
    animationDelay: string;
};

export type HeroData = {
    background: {
        gradient: string;
        elements: Array<{
            position: string;
            size: string;
            color: string;
            blur: string;
            animation: string;
        }>;
    };
    trustBadge: HeroBadge;
    headline: {
        part1: string;
        part2: string;
        gradient: string;
    };
    description: string;
    buttons: HeroButton[];
    trialBadge: HeroBadge;
    dashboard: {
        image: {
            src: string;
            alt: string;
            width: number;
            height: number;
        };
        stats: HeroStat[];
        floatingElements: HeroFloatingElement[];
    };
    scrollIndicator: {
        enabled: boolean;
    };
};

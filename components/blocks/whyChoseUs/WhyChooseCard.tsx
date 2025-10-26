import { LucideIcon } from "lucide-react";

interface WhyChooseCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    size: 'small' | 'medium' | 'large';
}

const WhyChooseCard = ({ icon: Icon, title, description, size }: WhyChooseCardProps) => {
    const sizeClasses = {
        small: 'min-h-[200px] sm:min-h-[220px]',
        medium: 'min-h-[240px] sm:min-h-[260px]',
        large: 'min-h-[280px] sm:min-h-[320px]'
    };

    const contentSizes = {
        small: 'text-base',
        medium: 'text-lg',
        large: 'text-xl'
    };

    const iconSizes = {
        small: 'w-4 h-4',
        medium: 'w-5 h-5',
        large: 'w-6 h-6'
    };

    return (
        <div className={`relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl h-full ${sizeClasses[size]} group`}>
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping delay-300"></div>
            </div>

            <div className="relative p-6 h-full flex flex-col justify-center items-center text-center z-10">
                {/* Icon with Enhanced Animation */}
                <div className="relative mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden border border-black/20 mx-auto">
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Icon className={`text-white relative z-10 group-hover:scale-110 transition-transform duration-300 ${iconSizes[size]}`} />
                    </div>
                    {/* Floating Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-200"></div>
                </div>

                {/* Content with Staggered Animation */}
                <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                    <h3 className={`font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 ${contentSizes[size]}`}>
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300 delay-100 max-w-md mx-auto">
                        {description}
                    </p>
                </div>

                {/* Bottom Indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <div className="w-6 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto transform group-hover:scale-x-125 transition-transform duration-300"></div>
                </div>
            </div>

            {/* Enhanced Border Effects */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-500"></div>
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/80 transition-all duration-500 delay-100"></div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-300 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-300 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
        </div>
    );
};

export default WhyChooseCard;

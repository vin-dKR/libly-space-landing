interface WhyChooseCardProps {
    icon: string;
    title: string;
    description: string;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
}

const WhyChooseCard = ({ icon, title, description, large, medium, small }: WhyChooseCardProps) => {
    const sizeClass = large ? 'h-64' : medium ? 'h-48' : 'h-48';

    return (
        <div className={`relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg ${sizeClass}`}>
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">{icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                        {description}
                    </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-100 transition-all duration-300"></div>
            </div>
        </div>
    );
};

export default WhyChooseCard;

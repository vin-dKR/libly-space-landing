interface FeatureCardProps {
    title: string
    description: string
    icon: string
    iconColor: string
}

const FeatureCard = ({ title, description, icon, iconColor }: FeatureCardProps) => {
    return (
        <div className="relative rounded-2xl border border-gray-300 bg-white/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full flex flex-col group">
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent group-hover:scale-y-105 group-hover:scale-x-101 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative flex-1 flex flex-col">
                {/* Icon Container with Modern Design */}
                <div className="mb-4 flex justify-center">
                    <div className={`w-12 h-12 ${iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <span className="text-white text-xl relative z-10">{icon}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                    <h1 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300 text-center">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300 flex-1">
                        {description}
                    </p>
                </div>
            </div>

            {/* Hover Border Effect */}
        </div>
    )
}

export default FeatureCard

interface FeatureCardProps {
    title: string
    description: string
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
    return (
        <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full flex flex-col">
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Top Spacing - Expands on Hover */}
            <div className="flex-1 group-hover:flex-[1.2] transition-all duration-300"></div>

            <div className="relative">
                {/* Icon Container */}
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 bg-white rounded-md"></div>
                </div>

                {/* Content */}
                <h1 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {title}
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Bottom Spacing - Expands on Hover */}
            <div className="flex-1 group-hover:flex-[1.2] group-hover:mb-2 transition-all duration-300"></div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-100 transition-all duration-300"></div>
        </div>
    )
}

export default FeatureCard

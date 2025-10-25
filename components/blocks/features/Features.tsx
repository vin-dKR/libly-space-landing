import { Feature, featuresList } from "@/constants/features/features"
import FeatureCard from "./FeatureCard"

const Features = () => {
    return (
        <div id="features" className="content-center sm:mt-24 md:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section - Matching Comparison Style */}
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                    ⚡ POWERFUL FEATURES
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 max-w-3xl">
                    Powerful Features for <span className="font-bold">Complete Control</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
                    Designed to simplify library management and save your time
                </p>
            </div>

            {/* Grid with Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {featuresList.map((feature: Feature) => (
                    <div key={feature.id} className="group">
                        <FeatureCard
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            iconColor={feature.iconColor}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features

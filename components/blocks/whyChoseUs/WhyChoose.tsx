import WhyChooseCard from "./WhyChooseCard";
import { whyChoosePoints } from "@/constants/whyChoose";

const WhyChoose = () => {
    return (
        <div id="why-choose" className="w-full mx-auto py-16 sm:py-36 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl items-center justify-center mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                        🚀 WHY WE'RE BETTER
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 max-w-3xl">
                        Why Choose <span className="font-bold">libly.space?</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                        Save time, reduce errors, and run your study library like a professional
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-5">
                    {/* Large Feature Card - Top Left */}
                    <div className="md:col-span-6 lg:col-span-8 group">
                        <WhyChooseCard
                            icon={whyChoosePoints[0].icon}
                            title={whyChoosePoints[0].title}
                            description={whyChoosePoints[0].description}
                            size="large"
                        />
                    </div>

                    {/* Small Vertical Card - Top Right */}
                    <div className="md:col-span-6 lg:col-span-4 group">
                        <WhyChooseCard
                            icon={whyChoosePoints[1].icon}
                            title={whyChoosePoints[1].title}
                            description={whyChoosePoints[1].description}
                            size="small"
                        />
                    </div>

                    {/* Medium Horizontal Card - Middle Left */}
                    <div className="md:col-span-6 lg:col-span-5 group">
                        <WhyChooseCard
                            icon={whyChoosePoints[2].icon}
                            title={whyChoosePoints[2].title}
                            description={whyChoosePoints[2].description}
                            size="medium"
                        />
                    </div>

                    {/* Medium Vertical Card - Middle Right */}
                    <div className="md:col-span-3 lg:col-span-4 group">
                        <WhyChooseCard
                            icon={whyChoosePoints[3].icon}
                            title={whyChoosePoints[3].title}
                            description={whyChoosePoints[3].description}
                            size="medium"
                        />
                    </div>

                    {/* Small Square Card - Bottom Right */}
                    <div className="md:col-span-3 lg:col-span-3 group">
                        <WhyChooseCard
                            icon={whyChoosePoints[4].icon}
                            title={whyChoosePoints[4].title}
                            description={whyChoosePoints[4].description}
                            size="small"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose;

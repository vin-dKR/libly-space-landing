import { Button } from "@/components/ui/button"
import { gettingStartedSteps } from "@/constants/howItWorks"

const HowItWorks = () => {
    return (
        <div id="how-it-works" className="max-w-6xl h-screen mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 md:mt-32">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                    🚀 GET STARTED
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 max-w-3xl">
                    How <span className="font-medium">libly.space</span> works?
                </h1>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
                    Get up and running in minutes
                </p>
            </div>

            {/* Steps Section */}
            <div className="w-full mb-16 sm:mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-gray-200 -z-10"></div>
                    <div className="hidden lg:block absolute top-8 left-2/3 right-1/3 h-0.5 bg-gray-200 -z-10"></div>

                    {gettingStartedSteps.map((item) => (
                        <div key={item.id} className="group">
                            <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full">
                                {/* Step Number */}
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                                    <span className="text-white font-semibold text-sm">{item.id}</span>
                                    {/* Tick Badge */}
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                                        <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300 text-base">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3 group-hover:text-gray-500 transition-colors duration-300">
                                    {item.description}
                                </p>
                                <div className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                                    ⏱️ {item.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 text-white text-center group">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                </div>

                <div className="relative">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 max-w-2xl mx-auto">
                        Ready to transform Your <span className="font-medium">Library Management?</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
                        Join hundreds of libraries already using Libly Space to streamline operations
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            className="bg-white text-black hover:bg-gray-100 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300"
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            className="border border-white/30 bg-white/10 text-white hover:bg-white/20 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 backdrop-blur-sm"
                        >
                            View Pricing
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks

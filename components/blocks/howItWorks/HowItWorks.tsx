import { Button } from "@/components/ui/button"
import { gettingStartedSteps } from "@/constants/howItWorks"

const HowItWorks = () => {
    return (
        <div id="how-it-works" className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="flex my-20 flex-col items-center text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4 border border-blue-100">
                    🚀 GET STARTED
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 max-w-3xl">
                    How <span className="font-medium bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">libly.space</span> works?
                </h1>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
                    Get up and running in minutes with our simple 3-step process
                </p>
            </div>

            {/* Steps Section */}
            <div className="w-full mb-16 sm:mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative">

                    {gettingStartedSteps.map((item) => (
                        <div key={item.id} className="group">
                            <div className="relative rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl h-full overflow-hidden">
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Floating Elements */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-300"></div>

                                {/* Step Number with Gradient */}
                                <div className="relative mb-6 w-fit">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden">
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <span className="text-white font-bold text-lg relative z-10">
                                            {item.id}
                                        </span>
                                    </div>
                                    {/* Progress Badge */}
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative space-y-4">
                                    <h3 className="font-semibold text-gray-900 text-lg mb-3 group-hover:text-gray-800 transition-colors duration-300 group-hover:translate-x-1 transform">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full text-xs text-blue-600 font-medium border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                                        ⏱️ {item.time}
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 p-8 sm:p-10 text-white text-center group overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-sky-300 rounded-full opacity-60 animate-bounce delay-500"></div>

                <div className="relative">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 max-w-2xl mx-auto">
                        Ready to transform Your <span className="font-medium bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Library Management?</span>
                    </h2>
                    <p className="text-blue-100 text-base leading-relaxed max-w-xl mx-auto mb-8">
                        Join hundreds of libraries already using Libly Space to streamline operations
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            className="border border-blue-300 bg-blue-600/20 text-white hover:bg-blue-600/30 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        >
                            View Pricing
                        </Button>
                    </div>
                </div>

                {/* Bottom Shine */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-60"></div>
            </div>
        </div>
    )
}

export default HowItWorks

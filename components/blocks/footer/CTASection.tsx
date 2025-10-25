"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Zap, CheckCircle } from "lucide-react"

const CTASection = () => {
    return (
        <div className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-5xl mx-auto w-full">
                <div className="relative group">
                    {/* Background that scales on hover */}
                    <div className="absolute inset-0 border-4 border-blue-800 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 rounded-3xl transform group-hover:scale-101 transition-all duration-500 ease-out origin-center"></div>

                    {/* Top part that scales more */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-700/50 to-transparent rounded-3xl 
                        transform group-hover:scale-y-102 group-hover:scale-x-101 
                        transition-all duration-500 ease-out 
                        origin-bottom"
                    />

                    {/* Main Card Content */}
                    <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 text-center group-hover:border-blue-600 transition-all duration-500">

                        {/* Floating Elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-60 animate-bounce delay-500"></div>

                        {/* Content */}
                        <div className="relative transform group-hover:scale-[0.98] transition-transform duration-500">
                            {/* Header Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-white text-xs font-medium mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-3 h-3 text-blue-300" />
                                READY TO TRANSFORM
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                                Start Your <span className="font-bold bg-gradient-to-r from-blue-400 to-sky-200 bg-clip-text text-transparent">Digital Journey</span>
                            </h2>

                            {/* Subheading */}
                            <p className="text-blue-100 leading-relaxed max-w-xl mx-auto mb-6 text-sm sm:text-base group-hover:text-blue-50 transition-colors duration-300">
                                Join thousands of libraries that have modernized their operations.
                                Get started in minutes, not days.
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-lg mx-auto">
                                {[
                                    { icon: <CheckCircle className="w-4 h-4" />, text: "No credit card" },
                                    { icon: <CheckCircle className="w-4 h-4" />, text: "14-day trial" },
                                    { icon: <CheckCircle className="w-4 h-4" />, text: "5min setup" }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-blue-100 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                                        <div className="text-green-300 group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        {feature.text}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn relative z-10">
                                    🚀 Start Free Trial
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </Button>
                                <Button className="border border-blue-300 bg-blue-600/20 text-white hover:bg-blue-600/30 px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm relative z-10">
                                    📞 Book Demo
                                </Button>
                            </div>

                            {/* Social Proof */}

                            <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-400/20 p-4 max-w-md mx-auto group-hover:bg-blue-500/15 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2 text-blue-100 group-hover:text-white transition-colors duration-300">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-3 h-3 fill-blue-300 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                                            ))}
                                        </div>
                                        <span className="text-white font-medium">Beta Release</span>
                                    </div>

                                    <div className="text-blue-100 group-hover:text-white transition-colors duration-300">
                                        <span className="text-white font-semibold">Now onboarding</span> new libraries
                                    </div>
                                </div>
                            </div>


                            {/* Bottom Note */}
                            <div className="mt-6">
                                <p className="text-blue-200/60 text-xs group-hover:text-blue-200/70 transition-colors duration-300">
                                    ✨ No setup fees • Cancel anytime
                                </p>
                            </div>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 rounded-b-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection

"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Zap, CheckCircle } from "lucide-react"

const CTASection = () => {
    return (
        <div className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-5xl mx-auto w-full">
                <div className="relative group">
                    {/* Background that scales on hover */}
                    <div className="absolute inset-0 border-4 border-gray-800 bg-gradient-to-br from-gray-900 to-black rounded-3xl transform group-hover:scale-101 transition-all duration-500 ease-out origin-center"></div>

                    {/* Top part that scales more */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-transparent rounded-3xl 
                        transform group-hover:scale-102 
                        transition-all duration-500 ease-out 
                        origin-bottom"
                    />

                    {/* Main Card Content */}
                    <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 text-center group-hover:border-gray-700 transition-all duration-500">

                        {/* Floating Elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-60 animate-bounce delay-500"></div>

                        {/* Content */}
                        <div className="relative transform group-hover:scale-[0.98] transition-transform duration-500">
                            {/* Header Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-3 h-3" />
                                READY TO TRANSFORM
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                                Start Your <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Digital Journey</span>
                            </h2>

                            {/* Subheading */}
                            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto mb-6 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
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
                                    <div key={index} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                                        <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        {feature.text}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                                <Button className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn relative z-10">
                                    🚀 Start Free Trial
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </Button>
                                <Button className="border border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 relative z-10">
                                    📞 Book Demo
                                </Button>
                            </div>

                            {/* Social Proof */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 max-w-md mx-auto group-hover:bg-white/10 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                                            ))}
                                        </div>
                                        <span className="text-white font-medium">4.9/5</span>
                                    </div>

                                    <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                                        Trusted by <span className="text-white font-semibold">1,000+</span> libraries
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Note */}
                            <div className="mt-6">
                                <p className="text-white/40 text-xs group-hover:text-white/50 transition-colors duration-300">
                                    ✨ No setup fees • Cancel anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection

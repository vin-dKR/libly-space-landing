"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-10"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">

                    {/* Trust Badge */}
                    <div className="group">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300">
                            ⭐ Trusted by Modern Libraries Worldwide
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-5 sm:space-y-6 max-w-4xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                            Manage Your Library{" "}
                            <span className="block mt-2 font-medium bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                                Effortlessly.
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
                            The all-in-one Library Management Platform designed for modern study libraries.
                            Track students, manage memberships, handle payments, and monitor seat usage in real-time.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                        <Button className="font-semibold text-sm px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl">
                            🚀 Get Started Free
                        </Button>
                        <Button variant="outline" className="font-semibold text-sm px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 rounded-xl">
                            📺 See How It Works
                        </Button>
                    </div>

                    {/* Free Trial Badge */}
                    <div className="group">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300">
                            💳 No credit card required •
                            <span className="text-green-600 font-semibold"> Free 14-day trial</span>
                        </div>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="w-full max-w-5xl mx-auto mt-10 sm:mt-14 lg:mt-20 relative group">
                        {/* Stats Cards */}
                        <div className="absolute -top-4 -left-4 z-10 group-hover:scale-110 transition-transform duration-300">
                            <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl px-4 py-3 border border-gray-200">
                                <div className="text-lg font-bold text-gray-900">99.9%</div>
                                <div className="text-xs text-gray-600">Uptime</div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 z-10 group-hover:scale-110 transition-transform duration-300">
                            <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl px-4 py-3 border border-gray-200">
                                <div className="text-lg font-bold text-gray-900">1000+</div>
                                <div className="text-xs text-gray-600">Libraries</div>
                            </div>
                        </div>

                        {/* Main Dashboard Image */}
                        <div className="relative rounded-3xl border-2 border-gray-200 bg-white/50 backdrop-blur-sm p-3 sm:p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>

                            <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-gradient-to-br from-gray-900 to-black">
                                <Image
                                    src="/images/hero-dashboard.png"
                                    alt="Libly Space Dashboard"
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -left-8 top-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute -right-6 bottom-1/3 w-3 h-3 bg-green-500 rounded-full opacity-60 animate-bounce delay-500"></div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animation */}
            <style jsx>{`
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
                .animate-shine {
                    animation: shine 3s infinite;
                }
            `}</style>
        </div>
    )
}

export default Hero

"use client"
import { Check } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { freeFeatures, proFeatures } from "@/constants/pricing";

export function Pricing() {
    const quarterlySavings = (299 * 3) - 750; // Monthly price * 3 months - quarterly price
    const savingsPercentage = Math.round((quarterlySavings / (299 * 3)) * 100);

    return (
        <section id="pricing" className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header Section - Matching Style */}
                <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                        💰 PRICING
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 max-w-3xl">
                        Simple, Transparent <span className="font-medium">Pricing</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
                        Start free, upgrade when you grow
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
                    {/* Free Tier */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300"></div>
                        <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 group-hover:shadow-lg h-full">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                                    Free
                                </h3>
                                <div className="flex items-baseline gap-2 mb-3">
                                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                                        ₹0
                                    </span>
                                    <span className="text-gray-600 text-sm">/month</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Perfect for small study halls getting started
                                </p>
                            </div>

                            <div className="mb-6">
                                <AnimatedButton
                                    href="https://app.libly.space"
                                    className="w-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 py-2.5 px-4 rounded-lg font-medium text-sm transition-colors"
                                >
                                    Get Started Free
                                </AnimatedButton>
                            </div>

                            <div className="space-y-3">
                                {freeFeatures.map((feature: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3 group/item">
                                        <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-120 transition-transform duration-300">
                                            <Check className="w-3 h-3 text-gray-600" />
                                        </div>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pro Tier - Featured */}
                    <div className="group relative">
                        {/* Popular Badge */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 group-hover:top-[-20px] transition-all duration-300">
                            <div className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                                Most Popular
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300"></div>

                        <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-black p-5 sm:p-6 text-white transition-all duration-300 group-hover:shadow-xl h-full">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                                    Pro
                                </h3>

                                {/* Monthly Price */}
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-3xl sm:text-4xl font-bold text-white">
                                        ₹299
                                    </span>
                                    <span className="text-gray-400 text-sm">/month</span>
                                </div>

                                {/* Quarterly Plan Info */}
                                <div className="bg-white/10 rounded-lg p-3 mb-3 backdrop-blur-sm border border-white/20">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg font-bold text-white">₹250</span>
                                            <span className="text-gray-300 text-xs">/month</span>
                                        </div>
                                        <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-medium">
                                            Save {savingsPercentage}%
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-300">
                                        Quarterly plan: <span className="font-medium text-white">₹750</span> every 3 months
                                    </div>
                                    <div className="text-xs text-green-400 font-medium mt-1">
                                        Save ₹{quarterlySavings} compared to monthly
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm">
                                    For growing institutions managing more students
                                </p>
                            </div>

                            <div className="mb-6">
                                <AnimatedButton
                                    href="https://app.libly.space"
                                    className="w-full bg-white text-black hover:bg-gray-100 py-2.5 px-4 rounded-lg font-medium text-sm transition-colors mb-3"
                                >
                                    Start Pro Trial
                                </AnimatedButton>
                                <AnimatedButton
                                    href="https://app.libly.space"
                                    className="w-full border border-white/30 bg-white/10 text-white hover:bg-white/20 py-2.5 px-4 rounded-lg font-medium text-sm transition-colors backdrop-blur-sm"
                                >
                                    Choose Quarterly Plan
                                </AnimatedButton>
                            </div>

                            <div className="space-y-3">
                                {proFeatures.map((feature: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3 group/item">
                                        <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-120 transition-transform duration-300 backdrop-blur-sm">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-200 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        All plans include secure cloud hosting and regular updates. No hidden fees.
                    </p>
                </div>
            </div>
        </section>
    );
}

"use client"
import { Check, Star, Shield, Clock, Zap } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { freeFeatures, proFeatures } from "@/constants/pricing";
import CTASection from "../footer/CTASection";

interface PricingProps {
    variant?: 'landing' | 'page';
    showHeader?: boolean;
    className?: string;
}

export function Pricing({ variant = 'landing', showHeader = true, className = '' }: PricingProps) {
    const quarterlySavings = (299 * 3) - 750;
    const savingsPercentage = Math.round((quarterlySavings / (299 * 3)) * 100);

    return (
        <section id="pricing" className={`w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 ${variant === 'landing' ? 'bg-blue-50/30' : 'bg-white'
            } ${className}`}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section - Enhanced for dedicated page */}
                {showHeader && (
                    <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-medium mb-4 border border-blue-200">
                            💰 PRICING
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 max-w-4xl">
                            Simple, Transparent <span className="font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Pricing</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                            Start free, upgrade when you grow. No credit card required to start.
                        </p>

                        {/* Additional header content for dedicated page */}
                        {variant === 'page' && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Shield className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">Secure & Reliable</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Zap className="w-6 h-6 text-green-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">Easy Setup</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Clock className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">24/7 Support</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Star className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">5-Star Rated</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16 sm:mb-20">
                    <FreeTier />
                    <ProTier
                        quarterlySavings={quarterlySavings}
                        savingsPercentage={savingsPercentage}
                    />
                </div>

                {/* Feature Comparison Table - Only for dedicated page */}
                {variant === 'page' && <FeatureComparison />}

                {/* Testimonials Section - Only for dedicated page */}
                {variant === 'page' && <TestimonialsSection />}

                {/* FAQ Section - Only for dedicated page */}
                {variant === 'page' && <FAQSection />}

                {/* CTA Section */}
                {variant === 'page' && <CTASection />}

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        All plans include secure cloud hosting and regular updates. No hidden fees.
                    </p>
                </div>
            </div>
        </section>
    );
}

// Free Tier Component (same as before)
function FreeTier() {
    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300"></div>
            <div className="relative rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 group-hover:shadow-lg h-full">
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                        Free
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                            ₹0
                        </span>
                        <span className="text-gray-600 text-sm">/month</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Perfect for small study halls and Libraries
                    </p>
                </div>

                <div className="mb-6">
                    <AnimatedButton
                        href="https://app.libly.space"
                        className="w-full border border-blue-200 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-300 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105"
                    >
                        Get Started Free
                    </AnimatedButton>
                </div>

                <div className="space-y-3">
                    {freeFeatures.map((feature: string, index: number) => (
                        <FeatureItem key={index} feature={feature} variant="free" />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Pro Tier Component (same as before)
function ProTier({ quarterlySavings, savingsPercentage }: { quarterlySavings: number; savingsPercentage: number }) {
    return (
        <div className="group relative">
            {/* Popular Badge */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 group-hover:-top-3 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    Most Popular
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-sky-500/10 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300"></div>

            <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-sky-700 p-6 sm:p-8 text-white transition-all duration-300 group-hover:shadow-xl h-full overflow-hidden">
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-60 animate-ping delay-500"></div>

                <div className="relative mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                        Pro
                    </h3>

                    {/* Monthly Price */}
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl sm:text-4xl font-bold text-white">
                            ₹299
                        </span>
                        <span className="text-blue-200 text-sm">/month</span>
                    </div>

                    {/* Quarterly Plan Info */}
                    <div className="bg-white/10 rounded-lg p-3 mb-3 backdrop-blur-sm border border-white/20 group/quarterly hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-baseline justify-between mb-1">
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-white">₹250</span>
                                <span className="text-blue-200 text-xs">/month</span>
                            </div>
                            <div className="text-xs bg-green-400 text-white px-2 py-1 rounded-full font-medium">
                                Save {savingsPercentage}%
                            </div>
                        </div>
                        <div className="text-xs text-blue-200">
                            Quarterly plan: <span className="font-medium text-white">₹750</span> every 3 months
                        </div>
                        <div className="text-xs text-green-300 font-medium mt-1">
                            Save ₹{quarterlySavings} compared to monthly
                        </div>
                    </div>

                    <p className="text-blue-200 text-sm">
                        For growing Libraries managing more students
                    </p>
                </div>

                <div className="mb-6 flex flex-col space-y-3">
                    <AnimatedButton
                        href="https://app.libly.space"
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Start Pro Trial
                    </AnimatedButton>
                </div>

                <div className="space-y-3">
                    {proFeatures.map((feature: string, index: number) => (
                        <FeatureItem key={index} feature={feature} variant="pro" />
                    ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50"></div>
            </div>
        </div>
    );
}

// Feature Item Component (same as before)
function FeatureItem({ feature, variant }: { feature: string; variant: 'free' | 'pro' }) {
    const isFree = variant === 'free';

    return (
        <div className="flex items-start gap-3 group/item">
            <div className={`w-5 h-5 ${isFree ? 'bg-blue-100 group-hover/item:bg-blue-200' : 'bg-white/30 group-hover/item:bg-white/40'
                } rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all duration-300 backdrop-blur-sm`}>
                <Check className={`w-3 h-3 ${isFree ? 'text-blue-600' : 'text-white'}`} />
            </div>
            <span className={`text-sm group-hover/item:${isFree ? 'text-gray-800' : 'text-white'} transition-colors duration-300 ${isFree ? 'text-gray-700' : 'text-blue-100'
                }`}>
                {feature}
            </span>
        </div>
    );
}

// New Components for Dedicated Page

function FeatureComparison() {
    const features = [
        {
            feature: "Student Management",
            free: "Up to 50 students",
            pro: "Unlimited students"
        },
        {
            feature: "Seat Tracking",
            free: "Real-time tracking",
            pro: "Real-time tracking + analytics"
        },
        {
            feature: "Payment Processing",
            free: "Basic payment management",
            pro: "Advanced payment analytics"
        },
        {
            feature: "Support",
            free: "Email support",
            pro: "24/7 priority support"
        },
        {
            feature: "Data Export",
            free: "Not available",
            pro: "Full data export & backup"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Feature Comparison</h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {features.map((item, index) => (
                    <div key={index} className={`flex items-center p-4 sm:p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        }`}>
                        <div className="flex-1 font-medium text-gray-900">{item.feature}</div>
                        <div className="flex-1 text-center text-sm text-gray-600">{item.free}</div>
                        <div className="flex-1 text-center text-sm text-blue-600 font-medium">{item.pro}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TestimonialsSection() {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Library Manager, Delhi",
            content: "Libly Space transformed our library operations. The Pro plan pays for itself in time saved.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "Study Hall Owner, Mumbai",
            content: "Started with Free tier and upgraded as we grew. The transition was seamless!",
            rating: 5
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
                        <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                        <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function FAQSection() {
    const faqs = [
        {
            question: "Can I switch plans anytime?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
        },
        {
            question: "Is there a contract or long-term commitment?",
            answer: "No, all plans are month-to-month. You can cancel anytime without penalties."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, UPI, net banking, and other popular payment methods in India."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client"
import { aboutData } from "@/constants/about"
import { Target, Users, Zap, Shield, Mail, ArrowRight } from "lucide-react"

const About = () => {
    const { header, mission, whatWeDo, whyWeExist, values, contact } = aboutData

    return (
        <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                        <Users className="w-3 h-3" />
                        {header.badge}
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-3">
                        {header.title}
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
                        {header.subtitle}
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-12 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                {mission.title}
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {mission.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Do */}
                <div className="mb-12 sm:mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-light text-gray-900 mb-3">
                            {whatWeDo.title}
                        </h2>
                        <p className="text-gray-500 text-sm max-w-3xl mx-auto">
                            {whatWeDo.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {whatWeDo.features.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full">
                                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-gray-700 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why We Exist */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 mb-12 text-white">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-2">
                                {whyWeExist.title}
                            </h2>
                            <p className="text-gray-300 text-sm">
                                {whyWeExist.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {whyWeExist.problems.map((problem, index) => (
                            <div key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                {problem}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-2xl font-light text-gray-900 text-center mb-8">
                        {values.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.items.map((value, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full">
                                    <h3 className="font-semibold text-gray-900 text-base mb-3 group-hover:text-gray-700 transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {contact.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
                        {contact.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href={`mailto:${contact.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            Get In Touch
                        </a>
                        <a
                            href="/pricing"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-300"
                        >
                            View Pricing
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-xs">
                        Trusted by study halls, coaching centers, and libraries across India • Built with modern technology for modern education
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

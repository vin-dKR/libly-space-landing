"use client"
import { careerData } from "@/constants/career"
import { Mail, Users, Heart, Target } from "lucide-react"

const Career = () => {
    const { header, introduction, currentStatus, benefits, culture, contact } = careerData

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

                {/* Introduction */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {introduction.title}
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {introduction.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Current Status */}
                <div className="bg-yellow-50 rounded-2xl border border-yellow-200 p-6 sm:p-8 mb-12 text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">{currentStatus.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                        {currentStatus.title}
                    </h3>
                    <p className="text-yellow-700 text-sm">
                        {currentStatus.message}
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-2xl font-light text-gray-900 text-center mb-8">
                        Why You'll Love Working With Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full">
                                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl">{benefit.icon}</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-gray-700 transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Culture & Values */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-12 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                {culture.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {culture.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {culture.values.map((value, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 text-center text-white">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {contact.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
                        {contact.description}
                    </p>
                    <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-300"
                    >
                        <Mail className="w-4 h-4" />
                        Send Your Resume
                    </a>
                    <p className="text-gray-400 text-xs mt-4">
                        We'll review your profile and reach out when opportunities match your skills
                    </p>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-xs">
                        Libly Space is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Career

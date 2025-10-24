"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp, Shield, Mail, FileText } from "lucide-react"
import { policySections } from "@/constants/policy/privacy-policy"

const PrivacyPolicy = () => {
    const [openSections, setOpenSections] = useState<number[]>([])

    const toggleSection = (index: number) => {
        setOpenSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }


    return (
        <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                        <Shield className="w-3 h-3" />
                        PRIVACY & SECURITY
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-3">
                        Privacy <span className="font-medium">Policy</span>
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Last Updated: October 24, 2025
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 backdrop-blur-sm">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Libly Space, a SaaS platform for managing study libraries and study halls, is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our services
                        (the "Service"). By using Libly Space, you consent to the practices described in this policy.
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-4">
                    {policySections.map((section, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl border border-gray-200 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                                >
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                        {section.title}
                                    </h3>
                                    {openSections.includes(index) ? (
                                        <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                    )}
                                </button>

                                {openSections.includes(index) && (
                                    <div className="px-6 pb-4">
                                        <div className="border-t border-gray-100 pt-4">
                                            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Contact Us
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
                        For questions, concerns, or to exercise your rights under the DPDP Act, contact us at:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="mailto:liblyspace@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            liblyspace@gmail.com
                        </a>
                        <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-300">
                            <FileText className="w-4 h-4" />
                            Download PDF
                        </button>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-xs">
                        This policy is compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy

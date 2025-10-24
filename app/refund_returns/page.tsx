"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp, FileText, Mail, RefreshCw } from "lucide-react"
import {
    refundsReturnsData
} from "@/constants/policy/refunds-returns"

const RefundsReturns = () => {
    const [openSections, setOpenSections] = useState<number[]>([])

    const toggleSection = (index: number) => {
        setOpenSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    const { header, introduction, sections, contact, footerNote } = refundsReturnsData

    return (
        <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                        <RefreshCw className="w-3 h-3" />
                        {header.badge}
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-3">
                        {header.title}
                    </h1>
                    <p className="text-gray-500 text-sm">
                        {header.subtitle}
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 backdrop-blur-sm">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        {introduction}
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-4">
                    {sections.map((section, index) => (
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
                        <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {contact.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
                        {contact.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href={`mailto:${contact.email}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            {contact.email}
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
                        >
                            <FileText className="w-4 h-4" />
                            {contact.buttonText}
                        </a>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-xs">
                        {footerNote}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RefundsReturns

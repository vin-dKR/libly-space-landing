"use client"
import { useState } from "react"
import { contactData } from "@/constants/contact"
import type { ContactFormData } from "@/types/contact"
import { Mail, Globe, Settings, Briefcase, Send, Clock, Users, Zap } from "lucide-react"

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const { header, contactMethods, form, supportInfo } = contactData

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        // You can integrate with your email service or API here
        alert("Thank you for your message! We'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const getIcon = (type: string) => {
        switch (type) {
            case 'email': return <Mail className="w-5 h-5" />
            case 'website': return <Globe className="w-5 h-5" />
            case 'support': return <Settings className="w-5 h-5" />
            default: return <Briefcase className="w-5 h-5" />
        }
    }

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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                    {/* Contact Methods - Left Side */}
                    <div className="lg:col-span-5 space-y-6">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="group">
                                <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            {getIcon(method.type)}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                                                {method.title}
                                            </h3>
                                            <p className="text-gray-900 text-base font-medium mb-1">
                                                {method.value}
                                            </p>
                                            <p className="text-gray-500 text-xs">
                                                {method.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Support Info */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm">
                                    {supportInfo.title}
                                </h3>
                            </div>
                            <div className="space-y-2">
                                {supportInfo.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-700 text-xs">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-7 group">
                        <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 group-hover:shadow-lg h-full">
                            <div className="relative">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                        <Send className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            {form.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm mt-1">
                                            {form.description}
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="group/input">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-black focus:ring-1 focus:ring-black group-hover/input:shadow-sm"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="group/input">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-black focus:ring-1 focus:ring-black group-hover/input:shadow-sm"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>

                                    <div className="group/input">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-black focus:ring-1 focus:ring-black group-hover/input:shadow-sm"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div className="group/input">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-black focus:ring-1 focus:ring-black group-hover/input:shadow-sm resize-none"
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </button>
                                </form>

                                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-4">
                                    <Clock className="w-3 h-3" />
                                    We typically respond within 24 hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                        🚀 READY TO GET STARTED?
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                        Start your free trial and see how Libly.Space can transform your library management
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="/pricing"
                            className="px-6 py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-300"
                        >
                            Start Free Trial
                        </a>
                        <a
                            href="/features"
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-300"
                        >
                            View Features
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log(formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="min-h-screen bg-gray-50 py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                        💬 GET IN TOUCH
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 max-w-3xl">
                        Let's <span className="font-medium">Talk</span> About Your Library
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
                        Ready to transform your library management? We're here to help you get started.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                    {/* Contact Info - Left Side */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Contact Methods */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {[
                                {
                                    icon: <Phone className="w-5 h-5" />,
                                    title: "Call Us",
                                    description: "+91 98765 43210",
                                    subtitle: "Mon to Fri, 9AM to 6PM"
                                },
                                {
                                    icon: <Mail className="w-5 h-5" />,
                                    title: "Email Us",
                                    description: "hello@libly.space",
                                    subtitle: "We reply within 24 hours"
                                },
                                {
                                    icon: <MapPin className="w-5 h-5" />,
                                    title: "Visit Us",
                                    description: "India",
                                    subtitle: "Serving libraries nationwide"
                                },
                                {
                                    icon: <MessageCircle className="w-5 h-5" />,
                                    title: "Live Chat",
                                    description: "Start chatting",
                                    subtitle: "Available 24/7 for support"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-2xl 
                                transform scale-100 group-hover:scale-y-[1.04] group-hover:scale-x-[1.02] 
                                transition-all duration-500 ease-out 
                                origin-bottom z-0 opacity-0 group-hover:opacity-100"
                                    />
                                    <div className="relative rounded-2xl border border-gray-200 bg-white backdrop-blur-sm p-5 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg h-full">
                                        {/* Background gradient - appears on hover */}

                                        {/* Content - positioned above background */}
                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                                    <div className="text-white">
                                                        {item.icon}
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-900 text-base font-medium mb-1">
                                                        {item.description}
                                                    </p>
                                                    <p className="text-gray-500 text-xs">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {[
                                { number: "24h", label: "Avg Response" },
                                { number: "1000+", label: "Libraries" },
                                { number: "99%", label: "Satisfaction" },
                                { number: "5min", label: "Setup Time" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200">
                                    <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-7 group">
                        <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 group-hover:shadow-lg h-full">
                            {/* Background Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                        <Send className="w-4 h-4 text-white" />
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900">Send us a message</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="group/input">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <Input
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
                                            <Input
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
                                        <Input
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
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-black focus:ring-1 focus:ring-black group-hover/input:shadow-sm resize-none"
                                            placeholder="Tell us about your library needs..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </Button>
                                </form>

                                <p className="text-center text-gray-500 text-xs mt-4">
                                    We'll get back to you within 24 hours
                                </p>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-100 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

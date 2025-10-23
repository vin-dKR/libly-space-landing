"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3">
            <div className="max-w-6xl w-full mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-6 h-6 bg-white rounded-md"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-900">
                            <span className="font-medium">libly</span>.space
                        </p>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        {['Features', 'Pricing', 'How It Works'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 rounded-lg hover:bg-gray-100/50"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            className="font-medium text-sm border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 rounded-xl px-4 py-2"
                        >
                            Log In
                        </Button>
                        <Button
                            className="font-medium text-sm bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 rounded-xl px-4 py-2"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation - Simple */}
                <div className="md:hidden flex justify-center mt-3 pt-3 border-t border-gray-200">
                    <div className="flex gap-4">
                        {['Features', 'Pricing'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    const element = document.getElementById(item.toLowerCase());
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

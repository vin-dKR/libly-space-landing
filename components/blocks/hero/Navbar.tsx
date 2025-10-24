"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { navbarData } from "@/constants/navigation"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const { logo, brand, navLinks, buttons, mobileLinks } = navbarData
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [showNavbar, setShowNavbar] = useState(true)

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down & past 100px - hide navbar
                    setShowNavbar(false)
                } else {
                    // Scrolling up - show navbar
                    setShowNavbar(true)
                }
                setLastScrollY(currentScrollY)
            }
        }

        window.addEventListener('scroll', controlNavbar)
        return () => window.removeEventListener('scroll', controlNavbar)
    }, [lastScrollY])

    const handleNavigation = (link: typeof navLinks[0]) => {
        if (link.type === 'scroll') {
            const element = document.getElementById(link.target);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false)
    }

    const renderButton = (button: typeof buttons[0]) => {
        if (button.type === 'external') {
            return (
                <Button
                    key={button.label}
                    variant={button.variant}
                    asChild
                    className="font-medium text-sm border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 rounded-xl px-3 py-2 sm:px-4 sm:py-2"
                >
                    <a href={button.href} target="_blank" rel="noopener noreferrer">
                        {button.label}
                    </a>
                </Button>
            )
        }

        return (
            <Button
                key={button.label}
                variant={button.variant}
                asChild
                className={`font-medium text-sm transition-all duration-300 rounded-xl px-3 py-2 sm:px-4 sm:py-2 ${button.variant === "default"
                    ? 'bg-black text-white hover:bg-gray-800 hover:scale-105'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    }`}
            >
                <Link href={button.href}>
                    {button.label}
                </Link>
            </Button>
        )
    }

    return (
        <div className={`w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-6xl w-full mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href={logo.href} className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            className="group-hover:scale-110 transition-transform duration-300 w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">
                            <span className="font-medium">{brand.name}</span>.{brand.accent}
                        </p>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavigation(link)}
                                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 rounded-lg hover:bg-gray-100/50"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA Buttons - Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        {buttons.map(renderButton)}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-1.5 rounded-lg hover:bg-gray-100/50 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-4 h-4 text-gray-600" />
                        ) : (
                            <Menu className="w-4 h-4 text-gray-600" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu - Compact */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-3 pb-2 border-t border-gray-200 pt-3">
                        {/* Compact Mobile Navigation Links */}
                        <div className="space-y-1 mb-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavigation(link)}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors duration-300 rounded-lg"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Compact Mobile CTA Buttons */}
                        <div className="flex flex-col gap-2 px-3">
                            {buttons.map((button) => (
                                <div key={button.label}>
                                    {button.type === 'external' ? (
                                        <a
                                            href={button.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full text-center block py-2 px-3 font-medium text-xs transition-all duration-300 rounded-lg ${button.variant === "default"
                                                ? 'bg-black text-white hover:bg-gray-800'
                                                : 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                                                }`}
                                        >
                                            {button.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={button.href}
                                            className={`w-full text-center block py-2 px-3 font-medium text-xs transition-all duration-300 rounded-lg ${button.variant === "default"
                                                ? 'bg-black text-white hover:bg-gray-800'
                                                : 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                                                }`}
                                        >
                                            {button.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Simple Mobile Navigation - Hidden when menu is open */}
                {!isMobileMenuOpen && (
                    <div className="md:hidden flex justify-center mt-2 pt-2 border-t border-gray-200">
                        <div className="flex gap-3">
                            {mobileLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavigation(link)}
                                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-300 px-2 py-1"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar

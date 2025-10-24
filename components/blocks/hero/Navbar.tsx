"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { navbarData } from "@/constants/navigation"

const Navbar = () => {
    const { logo, brand, navLinks, buttons, mobileLinks } = navbarData

    const handleNavigation = (link: typeof navLinks[0]) => {
        if (link.type === 'scroll') {
            const element = document.getElementById(link.target);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const renderButton = (button: typeof buttons[0]) => {
        if (button.type === 'external') {
            return (
                <Button
                    key={button.label}
                    variant={button.variant}
                    asChild
                    className="font-medium text-sm border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 rounded-xl px-4 py-2"
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
                className={`font-medium text-sm transition-all duration-300 rounded-xl px-4 py-2 ${button.variant === "default"
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
        <div className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3">
            <div className="max-w-6xl w-full mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href={logo.href} className="flex items-center gap-3 group">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            className="group-hover:scale-110 transition-transform duration-300"
                        />
                        <p className="text-2xl font-bold text-gray-900">
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

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-2">
                        {buttons.map(renderButton)}
                    </div>
                </div>

                {/* Mobile Navigation - Simple */}
                <div className="md:hidden flex justify-center mt-3 pt-3 border-t border-gray-200">
                    <div className="flex gap-4">
                        {mobileLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavigation(link)}
                                className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

"use client"
import Link from "next/link";
import { footerData } from "@/constants/footer";
import type { FooterLink } from "@/constants/footer";
import Image from "next/image";

export function Footer() {
    const handleScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderFooterLink = (link: FooterLink, index: number) => {
        const commonProps = {
            className: "text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1 sm:gap-2 group/item py-1 w-full text-left"
        };

        switch (link.type) {
            case 'scroll':
                return (
                    <button
                        key={index}
                        {...commonProps}
                        onClick={() => handleScroll(link.target)}
                    >
                        {link.label}
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs">→</span>
                    </button>
                );

            case 'page':
                return (
                    <Link
                        key={index}
                        {...commonProps}
                        href={link.href}
                    >
                        {link.label}
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs">→</span>
                    </Link>
                );

            case 'external':
                return (
                    <a
                        key={index}
                        {...commonProps}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.label}
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs">→</span>
                    </a>
                );

            case 'email':
                return (
                    <a
                        key={index}
                        {...commonProps}
                        href={link.href}
                    >
                        {link.label}
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs">→</span>
                    </a>
                );

            default:
                return null;
        }
    };

    return (
        <footer className="bg-gray-950 text-gray-300 w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 text-xs font-medium mb-4">
                            {footerData.brand.badge}
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/libly-space-logo.png"
                                alt="libly space logo"
                                height={28}
                                width={28}
                                className="w-6 h-6 sm:w-7 sm:h-7"
                            />
                            <span className="font-bold text-xl sm:text-2xl">libly<span className="font-semibold">.space</span></span>
                        </div>

                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mb-3">
                            {footerData.brand.description}
                        </p>

                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            {footerData.brand.status}
                        </div>
                    </div>

                    {/* Dynamic Sections */}
                    {footerData.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="group">
                            <h4 className="text-white mb-3 sm:mb-4 font-semibold text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                                {section.title}
                            </h4>
                            <ul className="space-y-1 sm:space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {renderFooterLink(link, linkIndex)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-6 px-0 lg:px-40 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="">
                        <p className="text-gray-500 text-xs sm:text-sm mb-1">
                            © 2025 Libly.Space. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
                        <p className="text-gray-600 text-xs sm:text-sm">
                            Made with ❤️ in India
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

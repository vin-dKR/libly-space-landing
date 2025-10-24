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
            className: "text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group/item py-1 w-full text-left"
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
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">→</span>
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
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">→</span>
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
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">→</span>
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
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">→</span>
                    </a>
                );

            default:
                return null;
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 text-xs font-medium mb-4">
                            {footerData.brand.badge}
                        </div>

                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/libly-space-logo.png"
                                alt="libly space logo"
                                height={30}
                                width={30}
                            />
                            <span className="font-medium text-2xl">libly<span className="font-semibold">.space</span></span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 text-xs mt-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            {footerData.brand.status}
                        </div>
                    </div>

                    {/* Dynamic Sections */}
                    {footerData.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="group">
                            <h4 className="text-white mb-4 font-semibold text-base group-hover:text-gray-200 transition-colors duration-300">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {renderFooterLink(link, linkIndex)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        {footerData.contactInfo.map((contact, index) => (
                            <div key={index} className="flex items-center gap-3 text-gray-400 justify-center">
                                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                                    {contact.icon}
                                </div>
                                <div>
                                    <div className="text-white font-medium">{contact.title}</div>
                                    {contact.type === 'email' ? (
                                        <a
                                            href={`mailto:${contact.value}`}
                                            className="hover:text-white transition-colors duration-300"
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <div>{contact.value}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm mb-2">
                            © 2025 Libly.Space. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs">
                            Made with ❤️ for modern education
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        {footerData.legal.map((link, index) => (
                            <div key={index} className="flex-shrink-0">
                                {renderFooterLink(link, index)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-8 pt-6 border-t border-gray-800">
                    <p className="text-gray-500 text-xs">
                        {footerData.additionalInfo}
                    </p>
                </div>
            </div>
        </footer>
    );
}

"use client"
export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 text-xs font-medium mb-4">
                            📚 MODERN LIBRARY MANAGEMENT
                        </div>
                        <span className="text-2xl sm:text-3xl text-white mb-4 block font-light">
                            <span className="font-medium">Libly</span>.Space
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Modern library and study hall management system designed for administrators
                            who want to move beyond paper registers and spreadsheets.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="group">
                        <h4 className="text-white mb-4 font-semibold text-lg group-hover:text-gray-200 transition-colors duration-300">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Features', id: 'features' },
                                { label: 'Pricing', id: 'pricing' },
                                { label: 'Login', href: 'https://app.libly.space' }
                            ].map((item, index) => (
                                <li key={index}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group/item"
                                        >
                                            {item.label}
                                            <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">→</span>
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                const element = document.getElementById(item.id!);
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group/item"
                                        >
                                            {item.label}
                                            <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">→</span>
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="group">
                        <h4 className="text-white mb-4 font-semibold text-lg group-hover:text-gray-200 transition-colors duration-300">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {['About Us', 'Contact', 'Support'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group/item"
                                    >
                                        {item}
                                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2025 Libly.Space. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-8 pt-6 border-t border-gray-800">
                    <p className="text-gray-500 text-xs">
                        Designed for modern educational institutions • Built with cutting-edge technology
                    </p>
                </div>
            </div>
        </footer>
    );
}

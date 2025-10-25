"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { heroData } from "@/constants/hero"

const Hero = () => {
    const {
        background,
        trustBadge,
        headline,
        description,
        buttons,
        trialBadge,
        dashboard,
        scrollIndicator
    } = heroData

    const renderStatCard = (stat: typeof dashboard.stats[0]) => {
        const positionClasses = {
            'top-left': '-top-2 sm:-top-4 -left-2 sm:-left-4',
            'top-right': '-top-2 sm:-top-4 -right-2 sm:-right-4',
            'bottom-left': '-bottom-2 sm:-bottom-4 -left-2 sm:-left-4',
            'bottom-right': '-bottom-2 sm:-bottom-4 -right-2 sm:-right-4'
        }

        return (
            <div
                key={stat.position}
                className={`absolute ${positionClasses[stat.position]} z-10 group-hover:scale-110 transition-transform duration-300`}
            >
                <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl sm:rounded-2xl px-2 py-1 sm:px-3 sm:py-2 border border-gray-200">
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
            </div>
        )
    }

    const renderButton = (button: typeof buttons[0]) => {
        const baseClasses = "font-semibold text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:scale-105 rounded-xl"

        if (button.variant === 'primary') {
            return (
                <Button
                    key={button.label}
                    className={`${baseClasses} bg-black text-white hover:bg-gray-800 hover:shadow-lg`}
                    asChild={!!button.href}
                    onClick={button.onClick}
                >
                    {button.href ? (
                        <a href={button.href}>
                            {button.icon} {button.label}
                        </a>
                    ) : (
                        <span>{button.icon} {button.label}</span>
                    )}
                </Button>
            )
        }

        return (
            <Button
                key={button.label}
                variant="outline"
                className={`${baseClasses} border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50`}
                onClick={button.onClick}
            >
                {button.icon} {button.label}
            </Button>
        )
    }

    const renderBadge = (badge: typeof trustBadge, isTrial?: boolean) => (
        <div className="group mt-8 sm:mt-0">
            <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300">
                {badge.icon} <span className="text-xs">{badge.content}</span>
                {isTrial && (
                    <span className="text-green-600 font-semibold text-xs"> Free 14-day trial</span>
                )}
            </div>
        </div>
    )

    return (
        <div className="w-full min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className={`absolute inset-0 -z-10 ${background.gradient}`}></div>
            {background.elements.map((element, index) => (
                <div
                    key={index}
                    className={`absolute ${element.position} ${element.size} ${element.color} rounded-full ${element.blur} ${element.animation} -z-10`}
                />
            ))}

            <div className="max-w-6xl mt-20 w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">

                    {/* Trust Badge */}
                    {renderBadge(trustBadge)}

                    {/* Main Content */}
                    <div className="space-y-4 sm:space-y-6 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dmSansBold tracking-tight">
                            {headline.part1}{" "}
                            <span className="block mt-2 font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                {headline.part2}
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
                            {description}
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                        {buttons.map(renderButton)}
                    </div>

                    {/* Free Trial Badge */}
                    {renderBadge(trialBadge, true)}

                    {/* Dashboard Preview */}
                    <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-14 lg:mt-20 relative group">
                        {/* Stats Cards */}
                        {dashboard.stats.map(renderStatCard)}

                        {/* Main Dashboard Image */}
                        <div className="relative rounded-2xl sm:rounded-3xl border-2 border-gray-200 bg-white/50 backdrop-blur-sm p-3 sm:p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>

                            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 bg-gradient-to-br from-gray-900 to-black">
                                <Image
                                    src={dashboard.image.src}
                                    alt={dashboard.image.alt}
                                    width={dashboard.image.width}
                                    height={dashboard.image.height}
                                    className="w-full h-auto object-contain mx-auto opacity-98 hover:opacity-100 transition-opacity duration-300"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        {dashboard.floatingElements.map((element, index) => (
                            <div
                                key={index}
                                className={`absolute ${element.position} ${element.size} ${element.color} rounded-full opacity-60 animate-bounce ${element.animationDelay}`}
                            />
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    {scrollIndicator.enabled && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Animation */}
            <style jsx>{`
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
                .animate-shine {
                    animation: shine 3s infinite;
                }
            `}</style>
        </div>
    )
}

export default Hero

import { comparisonPoints } from "@/constants/comparison";
import ComparisonCard from "./ComparisonCard";

const Comparison = () => {
    return (
        <div id="comparison" className="mt-30 py-16 sm:py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section - Compact */}
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                    ⚡ MODERN SOLUTION
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-4 max-w-4xl">
                    Stop Wasting Time on <span className="font-medium">Outdated Methods</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
                    Transform chaotic manual processes into streamlined automation
                </p>
            </div>

            {/* Comparison Grid - Compact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Traditional Systems */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-2xl transform group-hover:scale-[1.01] transition-all duration-300"></div>
                    <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6">
                        <div className="text-center pb-4 mb-4 border-b border-gray-100">
                            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <div className="w-5 h-5 bg-red-400 rounded-md"></div>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-1">Traditional Systems</h2>
                            <p className="text-gray-500 text-xs font-normal">Excel & Manual Records</p>
                        </div>

                        <div className="space-y-3">
                            {comparisonPoints.map((point) => (
                                <ComparisonCard
                                    key={point.id}
                                    type="traditional"
                                    title={point.traditional}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Libly Space - Featured */}
                <div className="relative group">
                    {/* Premium Badge - Compact */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            ⭐ libly.space
                        </div>
                    </div>

                    <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 text-white overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                        </div>

                        <div className="relative text-center pb-4 mb-4 border-b border-gray-800">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                                <div className="w-5 h-5 bg-green-400 rounded-md"></div>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-light text-white mb-1">Libly Space</h2>
                            <p className="text-gray-400 text-xs font-normal">Modern Cloud Platform</p>
                        </div>

                        <div className="relative space-y-3">
                            {comparisonPoints.map((point) => (
                                <ComparisonCard
                                    key={point.id}
                                    type="liblySpace"
                                    title={point.liblySpace.split(' - ')[0]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comparison;

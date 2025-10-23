interface ComparisonCardProps {
    type: 'traditional' | 'liblySpace';
    title: string;
}

const ComparisonCard = ({ type, title }: ComparisonCardProps) => {
    const isTraditional = type === 'traditional';

    return (
        <div className={`rounded-xl p-3 transition-all duration-300 hover:transform hover:scale-[1.01] ${isTraditional
            ? 'bg-gray-50/50 hover:bg-gray-100/80'
            : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'
            }`}>
            <div className="flex items-start gap-3">
                {/* Icon Indicator - Compact */}
                <div className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center ${isTraditional
                    ? 'bg-red-100 text-red-600'
                    : 'bg-green-400/20 text-green-400'
                    }`}>
                    {isTraditional ? (
                        <div className="w-1.5 h-0.5 bg-current"></div> // Minus icon
                    ) : (
                        <div className="w-1 h-1 bg-current rounded-full"></div> // Dot icon
                    )}
                </div>

                {/* Content - Compact */}
                <div className="flex-1 min-w-0">
                    <h3 className={`text-xs leading-relaxed ${isTraditional ? 'text-gray-700' : 'text-gray-200'
                        }`}>
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ComparisonCard

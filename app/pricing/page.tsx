import { Pricing } from "@/components/blocks/pricing/CustomPricing";

export default function PricingPage() {
    return (
        <div className="min-h-screen">
            <Pricing
                variant="page"
                showHeader={true}
                className="pt-20" // Add extra padding for fixed nav
            />
        </div>
    );
}

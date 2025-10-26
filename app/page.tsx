import Comparison from "@/components/blocks/comparisions/Comparison";
import Features from "@/components/blocks/features/Features";
import CTASection from "@/components/blocks/footer/CTASection";
import Hero from "@/components/blocks/hero/Hero";
import HowItWorks from "@/components/blocks/howItWorks/HowItWorks";
import { Pricing } from "@/components/blocks/pricing/CustomPricing"
import WhyChoose from "@/components/blocks/whyChoseUs/WhyChoose";

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <Features />
            <Comparison />
            <WhyChoose />
            <HowItWorks />
            <Pricing />
            <CTASection />
        </div>
    );
}

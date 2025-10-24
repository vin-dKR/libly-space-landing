import Comparison from "@/components/blocks/comparisions/Comparison";
import Contact from "@/components/blocks/contact/Contact";
import Features from "@/components/blocks/features/Features";
import CTASection from "@/components/blocks/footer/CTASection";
import { Footer } from "@/components/blocks/footer/Footer";
import Hero from "@/components/blocks/hero/Hero";
import Navbar from "@/components/blocks/hero/Navbar";
import HowItWorks from "@/components/blocks/howItWorks/HowItWorks";
import { Pricing } from "@/components/blocks/pricing/Pricing";
import WhyChoose from "@/components/blocks/whyChoseUs/WhyChoose";

export default function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <Hero />
            <Features />
            <Comparison />
            <WhyChoose />
            <HowItWorks />
            <Pricing />
            <Contact />
            <CTASection />
            <Footer />
        </div>
    );
}

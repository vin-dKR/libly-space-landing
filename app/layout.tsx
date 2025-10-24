import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/blocks/hero/Navbar";
import { Footer } from "@/components/blocks/footer/Footer";

export const metadata: Metadata = {
    title: "libly.space",
    description: "this is a libray SaaS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="font-dmSansReg"
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

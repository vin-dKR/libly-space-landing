import type { Metadata } from "next";
import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}

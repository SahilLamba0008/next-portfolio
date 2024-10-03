import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SpaceWarpCanvas from "@/components/space-warp-canvas";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import BgGlow from "@/components/ui/bg-glow";
import Navbar from "@/components/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context-provider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="!scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark mx-4 my-8 flex flex-col`}
            >
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <BgGlow />
                    <ActiveSectionContextProvider>
                        <Navbar />
                        <SpaceWarpCanvas />
                        {children}
                    </ActiveSectionContextProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

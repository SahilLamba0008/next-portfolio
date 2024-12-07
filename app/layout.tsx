import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SpaceWarpCanvas from "@/components/space-warp-canvas";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import BgGlow from "@/components/ui/bg-glow";
import Navbar from "@/components/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

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
        className={`${geistSans.variable} ${geistMono.variable} dark mx-4 my-8 flex flex-col antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <BgGlow />
          <ActiveSectionContextProvider>
            <Navbar />
            <SpaceWarpCanvas />
            <SpeedInsights />
            <Analytics />
            {children}
          </ActiveSectionContextProvider>
          <hr className="mt-20 border-t-2 border-gray-500 opacity-20" />
          <Link
            href="https://nextjs.org/"
            target="__blank"
            className="mx-auto my-20 flex w-fit cursor-pointer gap-2 hover:font-medium"
          >
            Made with Next.js
            <svg
              height="20px"
              className="mt-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 284 65"
            >
              <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
            </svg>
          </Link>
        </ThemeProvider>
      </body>
    </html>
  );
}

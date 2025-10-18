import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Provider } from "@/components/layout/providers";
import Footer from "@/components/layout/footer";
import Divider from "@/components/layout/divider";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Surojit Ghosh",
    description: "Portfolio of Surojit Ghosh",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-MQ1B4WZBPF"
                ></Script>
                <Script id="google-analytics">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-MQ1B4WZBPF');
                    `}
                </Script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Provider>
                    <main className="relative">
                        <Header />
                        <Divider />
                        {children}
                        <Divider />
                        <Footer />
                    </main>
                </Provider>
            </body>
        </html>
    );
}

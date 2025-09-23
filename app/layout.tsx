import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Provider } from "@/components/layout/providers";
import Footer from "@/components/layout/footer";
import Divider from "@/components/layout/divider";

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

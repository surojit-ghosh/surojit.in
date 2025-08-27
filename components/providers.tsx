"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            enableSystem
            disableTransitionOnChange
            enableColorScheme
            storageKey="theme"
            defaultTheme="system"
            attribute="class"
        >
            {children}
        </NextThemesProvider>
    );
}

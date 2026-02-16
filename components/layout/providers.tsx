"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState } from "react";

export function Provider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minute
                        gcTime: 24 * 60 * 60 * 1000, // 24 hours
                        refetchOnWindowFocus: false,
                        retry: 1,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider
                enableSystem
                disableTransitionOnChange
                enableColorScheme
                storageKey="theme"
                defaultTheme="dark"
                attribute="class"
            >
                {children}
            </NextThemesProvider>
        </QueryClientProvider>
    );
}

"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BanterLoader from "./banter-loader";

interface PageTransitionContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
    isLoading: false,
    setIsLoading: () => { },
});

export const usePageTransition = () => useContext(PageTransitionContext);

interface PageTransitionProviderProps {
    children: React.ReactNode;
}

export const PageTransitionProvider = ({ children }: PageTransitionProviderProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showIntro, setShowIntro] = useState(true);
    const pathname = usePathname();

    // Initial intro screen
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
            setIsLoading(false);
        }, 2500); // Show intro for 2.5 seconds

        return () => clearTimeout(timer);
    }, []);

    // Page transition on route change
    useEffect(() => {
        if (!showIntro) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500); // Longer transition duration

            return () => clearTimeout(timer);
        }
    }, [pathname, showIntro]);

    return (
        <PageTransitionContext.Provider value={{ isLoading, setIsLoading }}>
            <AnimatePresence mode="wait">
                {(showIntro || isLoading) && (
                    <motion.div
                        key="loader"
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1]  // extra smooth ease-out-expo
                        }}
                        className="fixed inset-0 z-100 bg-red-600 flex items-center justify-center"
                    >
                        <BanterLoader />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                {children}
            </motion.div>
        </PageTransitionContext.Provider>
    );
};

export default PageTransitionProvider;

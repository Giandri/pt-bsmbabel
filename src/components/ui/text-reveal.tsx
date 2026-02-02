"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    text: string;
    className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[300vh]", className)}>
            <div className={cn("sticky top-[20vh] mx-auto flex h-[60vh] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]")}>
                <p ref={targetRef} className={"p-5 text-lg font-bold text-black/20 dark:text-white/20 md:text-xl lg:text-2xl xl:text-3xl text-justify leading-relaxed"}>
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <span key={i}>
                                <Word progress={scrollYProgress} range={[start, end]}>
                                    {word}
                                </Word>
                                {" "}
                            </span>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

interface WordProps {
    children: string;
    progress: any;
    range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="xl:lg-3 relative inline-block">
            <span className={"absolute opacity-30"}>{children}</span>
            <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"}>
                {children}
            </motion.span>
        </span>
    );
};

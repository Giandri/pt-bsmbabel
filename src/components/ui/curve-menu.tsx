"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Curve = () => {
    const [dimensions, setDimensions] = useState({ height: 0 });

    useEffect(() => {
        const resize = () => {
            setDimensions({
                height: window.innerHeight,
            });
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    const initialPath = `M100 0 L100 ${dimensions.height} Q-100 ${dimensions.height / 2} 100 0`;
    const targetPath = `M100 0 L100 ${dimensions.height} Q100 ${dimensions.height / 2} 100 0`;

    const curve = {
        initial: {
            d: initialPath,
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
        },
    };

    return (
        <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-white stroke-none pointer-events-none">
            <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
            />
        </svg>
    );
};

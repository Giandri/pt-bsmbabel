"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";

export default function ArmadaPage() {
    const heroImages = ["/images/11.jpeg", "/images/10.jpeg", "/images/13.jpeg", "/images/4.jpeg"];
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const armadaItems = [
        { id: 11, name: "Kapal Cutter Suction Dredger (CSD) PT BSM" },
        { id: 10, name: "Kapal Anchor Boat / Kapal Kerja / Supply Boat PT BSM" },
    ];

    return (
        <div className="relative min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                {/* Background Image Carousel */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentHeroIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentHeroIndex]}
                            alt="Armada Hero"
                            fill
                            priority
                            quality={100}
                            className={`object-cover ${heroImages[currentHeroIndex].includes("10.jpeg") ? "object-[center_75%]" : "object-center"}`}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-black/20" />

                {/* Hero Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-6 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-2xl mb-4">
                            Armada <span className="text-red-600">Kapal</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                            PT. Bangka Sand Mining didukung oleh berbagai armada kapal modern dan terawat untuk mendukung setiap proyek pengerukan dan reklamasi.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Armada Section */}
            <section className="relative py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-7xl mx-auto">


                    {/* Grid Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
                        {armadaItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative h-[400px] overflow-hidden">
                                    <Image
                                        src={`/images/${item.id}.jpeg`}
                                        alt={item.name}
                                        fill
                                        className={`object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out ${item.id === 10 ? "object-[center_75%]" : ""}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-center flex items-end justify-center h-full pb-6">
                                        {/* Name Badge */}
                                        <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-2xl text-xs md:text-sm font-bold tracking-wide uppercase shadow-xl group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300 max-w-[80%]">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </section>

            <Footer />
        </div>
    );
}

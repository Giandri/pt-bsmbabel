"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowUpRightIcon } from "lucide-react";

const FooterMap = dynamic(() => import("@/components/footer-map"), { ssr: false });

export default function ProjectPage() {
    const heroImages = ["/images/6.jpeg", "/images/8.jpeg", "/images/3.jpeg", "/images/5.jpeg"];
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const projects = [
        { id: 1, name: "BSM Sampur", loc: "Pantai Sampur, Air Itam", coords: [-2.1521828619051546, 106.18000472635927] },
        { id: 2, name: "BSM Bakit", loc: "Bakit, Parittiga", coords: [-1.643530765606718, 105.72355742472973] },
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
                            alt="Project Hero"
                            fill
                            priority
                            quality={100}
                            className="object-cover object-center"
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
                            Proyek <span className="text-red-600">Kami</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                            Jejak langkah kami dalam membangun infrastruktur maritim di berbagai wilayah.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="relative py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Grid Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-red-500/50 transition-all duration-300 shadow-xl"
                            >
                                {/* Map Container */}
                                <div className="h-[400px] w-full relative z-0">
                                    <FooterMap center={project.coords as [number, number]} zoom={12} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 -mt-6 mx-4 mb-6">
                                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 p-5 rounded-2xl shadow-2xl group-hover:translate-y-[-5px] transition-transform duration-300">
                                        <h3 className="text-xl font-bold text-black mb-1">{project.name}</h3>
                                        <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            {project.loc}
                                        </div>
                                        <div className="w-full h-px bg-slate-200 mb-4" />
                                        <div className="flex justify-between items-center">
                                            <div className="bg-slate-800 p-2 rounded-full text-white group-hover:bg-red-600 transition-colors">
                                                <ArrowUpRightIcon className="w-4 h-4" />
                                            </div>
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

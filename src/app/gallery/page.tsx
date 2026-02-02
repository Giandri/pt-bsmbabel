"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
    const heroImages = ["/images/3.jpeg", "/images/5.jpeg", "/images/8.jpeg", "/images/11.jpeg"];
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const galleryImages = [
        { id: 1, src: "/images/1.jpeg", title: "Operasi Pengerukan" },
        { id: 2, src: "/images/3.jpeg", title: "Kapal Tug Boat" },
        { id: 3, src: "/images/4.jpeg", title: "Kapal Tongkang" },
        { id: 4, src: "/images/5.jpeg", title: "Armada di Pelabuhan" },
        { id: 5, src: "/images/6.jpeg", title: "Lokasi Proyek" },
        { id: 6, src: "/images/8.jpeg", title: "Proses Reklamasi" },
        { id: 7, src: "/images/10.jpeg", title: "Kapal Anchor Boat" },
        { id: 8, src: "/images/11.jpeg", title: "Kapal CSD" },
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
                            alt="Gallery Hero"
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
                            Galeri <span className="text-red-600">Foto</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                            Dokumentasi visual aktivitas operasional dan armada PT. Bangka Sand Mining.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="relative py-24 px-6 lg:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Grid Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-xl text-sm font-bold tracking-wide">
                                        {item.title}
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

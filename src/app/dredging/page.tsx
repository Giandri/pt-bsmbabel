"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { TextReveal } from "@/components/ui/text-reveal";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DredgingPage() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-red-500/30">
            <Navbar />

            {/* HERO SECTION: Full Screen Carousel CONTROLLER */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <Carousel
                    setApi={setApi}
                    className="w-full h-full"
                    opts={{
                        align: "start",
                        loop: false, // Disable loop for clear 2-section switch
                    }}
                >
                    <CarouselContent className="h-full">
                        {/* Slide 1: Dredging */}
                        <CarouselItem className="relative w-full h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/1.jpeg"
                                    alt="Dredging Banner"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/40 z-10" />
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl mb-4">
                                        <span className="text-red-500">Pengerukan</span>
                                    </h1>
                                    <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light tracking-wide">
                                        Solusi pengerukan terintegrasi.
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>

                        {/* Slide 2: Reclamation */}
                        <CarouselItem className="relative w-full h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/3.jpeg"
                                    alt="Reclamation Banner"
                                    fill
                                    className="object-cover"
                                    priority={false}
                                />
                                <div className="absolute inset-0 bg-black/40 z-10" />
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl mb-4">
                                        <span className="text-red-500">Reklamasi</span>
                                    </h1>
                                    <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light tracking-wide">
                                        Membangun masa depan maritim.
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-12 right-12 flex gap-4 z-30">
                        <CarouselPrevious className="static translate-y-0 translate-x-0" />
                        <CarouselNext className="static translate-y-0 translate-x-0" />
                    </div>
                </Carousel>
            </section>

            {/* DYNAMIC CONTENT SECTION */}
            <div className="min-h-screen">
                <AnimatePresence mode="wait">
                    {current === 0 ? (
                        /* CONTENT FOR DREDGING */
                        <motion.div
                            key="dredging"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* SECTION: PENGERUKAN (DREDGING) */}
                            <section className="py-10 px-6 lg:px-12 bg-white">
                                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                                    <div className="flex flex-col md:flex-row items-center gap-12">
                                        <div className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
                                            <Image
                                                src="/images/1.jpeg"
                                                alt="Pengerukan"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6 uppercase tracking-tight">
                                                Pengerukan / <span className="text-slate-900">Dredging</span>
                                            </h2>
                                            <div className="h-2 w-32 bg-red-600 mb-8" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <TextReveal
                                            text="Pengerukan merupakan bagian dari kegiatan sipil, yang memiliki pengertian pemindahan material dari bawah air dengan menggunakan peralatan keruk atau setiap kegiatan yang merubah konfigurasi atau kedalaman laut, sungai, danau, pantai atau daratan sehingga mencapai kedalaman/elevasi tertentu dengan menggunakan peralatan keruk/ kapal keruk."
                                            className="h-[120vh]"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* SECTION: FUNGSI PENGERUKAN (List) */}
                            <section className="py-12 md:py-24 px-6 lg:px-12 bg-slate-900 text-white relative overflow-hidden mb-12 md:mb-24">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/2.jpeg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-10"
                                    />
                                </div>
                                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start gap-8 md:gap-12">
                                    <div className="w-full md:w-1/3">
                                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight text-left leading-tight">
                                            Fungsi <br /><span className="text-red-600">Pengerukan</span>
                                        </h2>
                                    </div>
                                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ul className="space-y-4 text-justify text-slate-300">
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 mt-2 bg-red-600 rounded-full shrink-0" />
                                                <span>Memperdalam dasar sungai / laut, memperbesar penampang sungai. Pada kolam pelabuhan adalah agar dapat melayani kapal-kapal besar.</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 mt-2 bg-red-600 rounded-full shrink-0" />
                                                <span>Pemanfaatan material pasir laut untuk keperluan urugan / fill untuk keperluan bangunan ataupun reklamasi tanah.</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 mt-2 bg-red-600 rounded-full shrink-0" />
                                                <span>Pemanfaatan material / tanah / lumpur di dasar sungai untuk keperluan penambangan.</span>
                                            </li>
                                        </ul>
                                        <ul className="space-y-4 text-justify  text-slate-300">
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 mt-2 bg-red-600 rounded-full shrink-0" />
                                                <span>Keperluan navigasi pelayaran.</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 mt-2 bg-red-600 rounded-full shrink-0" />
                                                <span>Pengendalian banjir / pengambilan material di muara sungai.</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 mt-2 bg-red-600 rounded-full shrink-0" />
                                                <span>Rekayasa konstruksi dan reklamasi, Pemeliharaan pesisir / pantai.</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="w-2 h-2 mt-2 bg-red-600 rounded-full shrink-0" />
                                                <span>Instalasi dan perawatan pipa bawah laut (pipeline).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    ) : (
                        /* CONTENT FOR RECLAMATION */
                        <motion.div
                            key="reclamation"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* SECTION: REKLAMASI */}
                            <section className="py-10 px-6 lg:px-12 bg-white">
                                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                                    <div className="flex flex-col md:flex-row items-center gap-12">
                                        <div className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
                                            <Image
                                                src="/images/3.jpeg"
                                                alt="Reklamasi"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6 uppercase tracking-tight">
                                                Reklamasi / <span className="text-slate-900">Reclamation</span>
                                            </h2>
                                            <div className="h-2 w-32 bg-red-600 mb-8" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <TextReveal
                                            text="Reklamasi adalah kegiatan yang dilakukan oleh orang dalam rangka meningkatkan manfaat sumber daya lahan ditinjau dari sudut lingkungan dan sosial ekonomi dengan cara pengurugan, pengeringan lahan, atau drainase."
                                            className="h-[120vh]"
                                        />
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
}

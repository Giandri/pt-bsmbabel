"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { CometCard } from "@/components/ui/comet-card";


export default function About() {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-red-500/30">
            <Navbar />

            <div className="pt-28">
                {/* Section 1: Introduction Header (Logo + Text) */}
                <section className="py-16 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        {/* Left: Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="shrink-0"
                        >
                            <Image src="/images/logo.png" alt="BSM Logo" width={300} height={300} className="w-64 md:w-80 object-contain" />
                        </motion.div>

                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <h1 className="text-3xl md:text-4xl font-black text-red-600 uppercase mb-2">PT. BANGKA SAND MINING</h1>
                            <h2 className="text-xl md:text-2xl font-bold text-red-400 mb-6 italic tracking-wider">DREDGING AND MINING</h2>
                            <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base text-justify">
                                <p>
                                    PT. Bangka Sand Mining (BSM) adalah perusahaan Penyewaan Kapal, Pengerukan (Dredging), Reklamasi, Normalisasi alur pelayaran dan Pelabuhan, Pengangkutan, perdagangan hasil Pertambangan (Mining) Pasir Silika / Pasir Kuarsa / Pasir Kontruksi (Sand Mining) yang didirikan berdasarkan hukum Negara Republik Indonesia (PMDN) dan berdomisili di Provinsi Kepulauan Bangka Belitung.
                                </p>
                                <p>
                                    PT. Bangka Sand Mining (BSM) saat ini berkomitmen untuk melaksanakan Pengerukan Alur Pelayaran Kapal Nelayan & non nelayan di Sungai, Muara Sungai dan Pesisir Pantai serta pemanfaatan material mineral logam dan non logam tergali untuk dimanfaatkan secara komersil / bisnis, PT. Bangka Sand Mining (BSM) juga melakukan Pembangunan dermaga nelayan maupun non nelayan sampai dengan pengelolaan badan usaha Pelabuhan Ketika dermaga selesai dibangun.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section 2: Visi & Misi (Stacked) */}
                <section className="relative overflow-hidden">
                    {/* Parallax Background */}
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: "url('/images/10.jpeg')" }}
                        />
                        {/* Optional: Darker overlay if needed to make text pop, but relying on red overlays below */}
                    </div>

                    {/* Visi */}
                    <div className="relative z-10 bg-black/60 text-white py-16 px-6 lg:px-12 border-b border-white/10">
                        <div className="max-w-7xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-wider">Visi</h2>
                            <p className="text-lg md:text-xl font-light italic max-w-4xl mx-auto text-white/90">
                                "Menjadi perusahaan nasional terkemuka di bidang pengerukan, reklamasi, pertambangan, dan jasa maritim."
                            </p>
                        </div>
                    </div>

                    {/* Misi */}
                    <div className="relative z-10 bg-red-600/60 text-white py-16 px-6 lg:px-12">
                        <div className="max-w-7xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-wider">Misi</h2>
                            <div className="max-w-4xl mx-auto text-left text-lg md:text-xl font-light space-y-2 inline-block">
                                <p>1. Memberikan layanan terbaik & berkualitas tinggi.</p>
                                <p>2. Mendukung kelancaran pelayaran & infrastruktur.</p>
                                <p>3. Mengelola sumber daya secara berkelanjutan.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Mengapa Kami? */}
                <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: "url('/images/3.jpeg')" }}
                        />

                        <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-transparent z-10" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                        <svg
                            className="relative block w-full h-[50px] md:h-[100px]"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 0 L0 120 L600 120 L0 0 M1200 0 L1200 120 L600 120 L1200 0"
                                className="fill-white"
                            ></path>
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
                        <div className="text-left">
                            <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase text-red-600 drop-shadow-lg">Mengapa <br /> kami?</h2>
                        </div>
                        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold">•</span>
                                    <span>Kami memiliki management yang handal, berpengalaman, dan profesional.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold">•</span>
                                    <span>Kami memiliki tenaga kerja tenaga ahli kompeten, dan pengalaman di bidang pengerukan dan reklamasi.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold">•</span>
                                    <span>Kami berkomitmen memberikan pelayanan excellent (terbaik).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 font-bold">•</span>
                                    <span>Kami memiliki alat produksi yang berkualitas, handal, dan sesuai standard.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: Struktur Organisasi (Tree Chart) */}
                <section className="py-24 px-6 lg:px-12 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-16 uppercase tracking-tight">
                            Struktur <br /> <span className="text-black">Organisasi</span>
                        </h2>

                        {/* Tree Structure */}
                        <div className="flex flex-col items-center w-full overflow-hidden pb-8">
                            {/* Level 1: Dewan Komisaris (Top) */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0, duration: 0.6 }}
                                className="relative z-10 bg-neutral-800 border border-neutral-700 hover:border-red-600 text-white px-8 py-6 rounded-2xl font-bold min-w-[200px] uppercase text-center tracking-wider group overflow-hidden"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-600/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-red-600/40 transition-all duration-500" />
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-700 group-hover:bg-red-600 transition-colors duration-300" />
                                <span className="relative z-10">DEWAN KOMISARIS</span>
                            </motion.div>
                            <div className="h-12 w-0.5 bg-red-600"></div>

                            {/* Level 2: Direktur Utama */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative z-10 bg-neutral-800 border border-neutral-700 hover:border-red-600 text-white px-8 py-6 rounded-2xl font-bold min-w-[200px] uppercase text-center tracking-wider group overflow-hidden"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-600/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-red-600/40 transition-all duration-500" />
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-700 group-hover:bg-red-600 transition-colors duration-300" />
                                <span className="relative z-10">DIREKTUR UTAMA</span>
                            </motion.div>

                            {/* Middle Section: Spine & Secretary */}
                            <div className="relative w-full max-w-5xl h-24">
                                {/* Center Vertical Spine */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-red-600"></div>

                                {/* Secretary Branch - Desktop */}
                                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-1/2 items-center pr-0.5">
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="relative bg-neutral-800 border border-neutral-700 hover:border-red-600 text-white px-6 py-4 rounded-xl font-bold min-w-[150px] uppercase text-sm text-center tracking-wider group overflow-hidden hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-red-600/20 blur-2xl rounded-full pointer-events-none group-hover:bg-red-600/40 transition-all duration-500" />
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-700 group-hover:bg-red-600 transition-colors duration-300" />
                                        <span className="relative z-10">SEKRETARIS</span>
                                    </motion.div>
                                    <div className="h-0.5 w-12 bg-red-600"></div>
                                </div>

                                {/* Secretary Branch - Mobile (Centered) */}
                                <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white px-2 z-20">
                                    {/* Spacer to just let the line pass through or we can put Secretary here if we want stack */}
                                </div>
                                <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="relative bg-neutral-800 border border-neutral-700 hover:border-red-600 text-white px-6 py-3 rounded-xl font-bold min-w-[140px] uppercase text-xs text-center tracking-wider group overflow-hidden"
                                    >
                                        <span className="relative z-10">SEKRETARIS</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Level 4: Directors Container */}
                            <div className="relative w-full max-w-[95%] md:max-w-[900px] mx-auto pt-8">
                                {/* Horizontal Connector Line - Desktop Only */}
                                <div className="hidden md:block absolute top-0 left-0 right-0 border-t-2 border-red-600"></div>

                                {/* Mobile central connector continuing down */}
                                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-red-600"></div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8 justify-items-center">
                                    {["DIREKTUR PROYEK", "DIREKTUR TEKNIK", "DIREKTUR ADMINISTRASI & KEUANGAN", "DIREKTUR OPERASIONAL"].map((role, idx) => (
                                        <div key={idx} className="flex flex-col items-center relative w-full">
                                            {/* Connector Up - Desktop */}
                                            <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-red-600"></div>

                                            {/* Connector - Mobile (connecting to simplified stack/grid) */}
                                            <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-red-600/50"></div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + (idx * 0.2), duration: 0.6 }}
                                                className="relative bg-neutral-800 border border-neutral-700 hover:border-red-600 text-white p-4 rounded-2xl md:rounded-b-xl md:rounded-t-[60px] font-bold text-xs md:text-sm uppercase w-full max-w-[200px] h-24 md:h-32 flex items-center justify-center leading-snug text-center tracking-tight group overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg"
                                            >
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-red-600/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-red-600/40 transition-all duration-500" />
                                                <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-700 group-hover:bg-red-600 transition-colors duration-300" />
                                                <span className="relative z-10 px-2">{role}</span>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Sertifikasi */}
                <section className="relative py-24 px-6 lg:px-12 bg-black overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-fixed bg-cover bg-center opacity-40"
                            style={{ backgroundImage: "url('/images/5.jpeg')" }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent z-10" />
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-12 uppercase tracking-tight drop-shadow-2xl">Sertifikasi</h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {["s1", "s3", "s2"].map((img, i) => (
                                <CometCard
                                    key={i}
                                    className="w-full max-w-[300px] aspect-3/4 relative group overflow-visible z-10"
                                >
                                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                                        <Image
                                            src={`/images/${img}.png`}
                                            alt={`Sertifikat ${i + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </CometCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 6: Direksi */}
                <section className="py-24 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-12 uppercase">Direksi</h2>
                        <div className="flex justify-center">
                            <CometCard className="w-full max-w-[300px] md:max-w-sm aspect-[3/4] relative z-10">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                                    {/* Full Image */}
                                    <Image
                                        src="/images/direksi.png"
                                        alt="Direktur Utama"
                                        fill
                                        className="object-cover  transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    />

                                    {/* Progressive Blur Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 pt-24 bg-linear-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-end">
                                        <div className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase mb-2 shadow-lg tracking-wider">Direktur Utama</div>
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">Arif Hidayat</h3>
                                    </div>
                                </div>
                            </CometCard>
                        </div>
                    </div>
                </section>

                {/* Section 7: Staff Banner Text */}
                <section className="py-20 bg-white text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-red-600 uppercase tracking-tighter">
                        STAFF PT. BANGKA SAND MINING
                    </h2>
                </section>
            </div>

            <Footer />
        </div>
    );
}

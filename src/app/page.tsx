"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Ship, Anchor, Truck } from "lucide-react";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { ArrowUpRightIcon } from "lucide-react";
import dynamic from "next/dynamic";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FooterMap = dynamic(() => import("@/components/footer-map"), { ssr: false });


export default function Home() {
  const heroImages = ["/images/4.jpeg", "/images/5.jpeg", "/images/3.jpeg", "/images/10.jpeg"];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const [activeAccordion, setActiveAccordion] = useState("item-0");

  const faqItems = [
    {
      id: "item-0",
      question: "Metode Eco-Dredging",
      answer: "Kami menggunakan teknologi pengerukan ramah lingkungan yang meminimalkan dampak terhadap ekosistem laut dan pesisir, memastikan keberlanjutan lingkungan sekitar area kerja.",
      image: "/images/8.jpeg"
    },
    {
      id: "item-1",
      question: "Armada Modern & Lengkap",
      answer: "Didukung oleh armada kapal Cutter Suction Dredger (CSD) dan kapal pendukung lainnya yang modern dan terawat, menjamin efisiensi dan ketepatan waktu dalam setiap proyek.",
      image: "/images/5.jpeg"
    },
    {
      id: "item-2",
      question: "Tim Profesional Berpengalaman",
      answer: "Memiliki tim ahli dengan pengalaman lebih dari 10 tahun di industri pengerukan dan reklamasi, siap memberikan solusi teknis terbaik untuk tantangan di lapangan.",
      image: "/images/3.jpeg"
    },
    {
      id: "item-3",
      question: "Legalitas & Kepatuhan",
      answer: "PT. BSM adalah perusahaan resmi (PMDN) dengan izin operasi lengkap, menjamin keamanan dan kepatuhan hukum dalam setiap kerjasama proyek.",
      image: "/images/10.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollY } = useScroll();
  // Responsive logo sizes - smaller on mobile
  const logoSize = useTransform(scrollY, [0, 300], [300, 50]);
  const logoSizeLg = useTransform(scrollY, [0, 300], [600, 70]);
  const logoTop = useTransform(scrollY, [0, 700], ["calc(50% - 100px)", "16px"]);
  const logoTopLg = useTransform(scrollY, [0, 700], ["calc(50% - 200px)", "12px"]);
  const logoLeft = useTransform(scrollY, [0, 300], ["calc(50% - 150px)", "12px"]);
  const logoLeftLg = useTransform(scrollY, [0, 300], ["calc(50% - 300px)", "12px"]);

  return (
    <div className="relative min-h-screen font-sans">
      <Navbar hideLogoOnHome />

      {/* Desktop Parallax Logo - only on lg screens */}
      <motion.div
        className="fixed z-60 pointer-events-none hidden lg:block"
        style={{
          top: logoTopLg,
          left: logoLeftLg,
          width: logoSizeLg,
          height: logoSizeLg,
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentHeroIndex} // Key changes to trigger animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentHeroIndex]}
              alt="Hero Background"
              fill
              priority
              quality={100}
              className={`object-cover ${heroImages[currentHeroIndex].includes("10.jpeg") ? "object-[center_75%]" : "object-center"}`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Simple gradient overlay - transparent to white */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center lg:justify-end px-6 lg:px-20 pb-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-right"
          >
            {/* Main Title Stack Container */}
            <div className="relative inline-flex flex-col items-center lg:items-end justify-center mb-8">
              <div className="relative z-10 flex flex-col items-center lg:items-end leading-[0.8] mix-blend-screen">
                {/* DREDGING */}
                <motion.h1
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-white drop-shadow-2xl"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  DREDGING
                </motion.h1>

                {/* MINING */}
                <motion.h1
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-white drop-shadow-2xl pr-0 sm:pr-4"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  MINING
                </motion.h1>

                {/* Mobile Ampersand - Centered absolutely */}
                <motion.div
                  className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl font-black italic text-red-600 drop-shadow-lg z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                >
                  &
                </motion.div>
              </div>

              {/* The Ampersand (&) */}
              <motion.div
                className="absolute -right-3 sm:-right-6 md:-right-8 lg:-right-12 top-1/2 -translate-y-[45%] text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-black italic text-red-600 drop-shadow-lg z-20 hidden lg:block"
                initial={{ scale: 0, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              >
                &
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >

              <Link href="/contact">
                <LiquidButton
                  variant="default"
                  size="lg"
                  className="[--liquid-button-background-color:theme(colors.red.600)] [--liquid-button-color:theme(colors.white)] text-white hover:text-red-700 bg-black rounded-full px-10 py-6 font-bold tracking-wider shadow-lg hover:shadow-xl"
                >
                  Hubungi Kami
                </LiquidButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Modern About Us */}
      <section className="relative bg-white pt-12 pb-40 px-6 lg:px-12 overflow-hidden  ">
        {/* Background texture/element */}
        <div className="absolute top-0 right-0 w-1/3 h-full  pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Content - Typography Driven */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h4 className="text-red-500 font-bold uppercase tracking-widest mb-2">Tentang Kami</h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 leading-tight">
                Profil <br />
                <span className="text-red-600">Perusahaan</span>
              </h2>
              <div className="h-1 w-20 bg-red-600 mb-3" />
              <p className="text-neutral-400 text-lg leading-relaxed mb-3 text-justify">
                PT. Bangka Sand Mining (BSM) bergerak di bidang <b>Pengerukan (Dredging)</b>, <b>Reklamasi</b>, dan <b>Perdagangan Pasir</b>. Kami berkomitmen mendukung normalisasi alur pelayaran dan pembangunan infrastruktur maritim secara berkelanjutan.
              </p>

              <Link href="/about">
                <LiquidButton
                  variant="ghost"
                  size="lg"
                  className="[--liquid-button-background-color:theme(colors.red.600)] [--liquid-button-color:theme(colors.white)] text-white border border-neutral-700 hover:border-red-600 rounded-none px-8 py-6 font-medium tracking-wide uppercase"
                >
                  Baca Selengkapnya
                </LiquidButton>
              </Link>
            </motion.div>

            {/* Right Content - Visual overlapping */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10">
                <Image
                  src="/images/3.jpeg"
                  alt="Mining activity"
                  width={600}
                  height={800}
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
                />

                {/* Floating "Card" Overlay */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-10 -left-10 bg-red-600 p-8 max-w-xs shadow-xl hidden md:block"
                >
                  <p className="text-white font-serif italic text-xl leading-relaxed">
                    "Mengubah sumber daya alam menjadi nilai tambah bagi pembangunan bangsa."
                  </p>
                </motion.div>
              </div>

              {/* Decorative Outline Box */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-neutral-700 -z-10 hidden md:block" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2 - Armada Kapal (Modernized) */}
      <section className="relative py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight"
            >
              Armada <span className="text-red-600">Kapal</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-red-600 mx-auto rounded-full"
            />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Dilengkapi dengan teknologi pengerukan terkini untuk performa dan efisiensi maksimal.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {[
              { id: 11, name: "Kapal Cutter Suction Dredger (CSD) PT BSM" },
              { id: 10, name: "Kapal Anchor Boat / Kapal Kerja / Supply Boat PT BSM" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
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

          {/* Bottom Button */}
          <div className="mt-16 text-center">
            <Link href="/armada">
              <LiquidButton
                variant="default"
                size="lg"
                className="[--liquid-button-background-color:theme(colors.red.600)] [--liquid-button-color:theme(colors.white)] text-white hover:text-red-700 bg-black rounded-full px-10 py-6 font-bold tracking-wider shadow-lg hover:shadow-xl"
              >
                LIHAT SEMUA ARMADA
              </LiquidButton>
            </Link>
          </div>
        </div>
      </section>


      {/* Section 3 - Projects */}
      <section className="relative py-24 px-6 lg:px-12 bg-neutral-900 overflow-hidden">
        {/* Background Image - CSS Parallax */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('/images/6.jpeg')" }}
          />
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-700/80 via-red-700/50 to-red-700/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
            >
              Proyek <span className="text-red-600">Kami</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-white mx-auto rounded-full"
            />
            <p className="mt-4 text-white max-w-2xl mx-auto">
              Jejak langkah kami dalam membangun infrastruktur maritim di berbagai wilayah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { id: 1, name: "BSM Sampur", loc: "Pantai Sampur, Air Itam", coords: [-2.1521828619051546, 106.18000472635927] },
              { id: 2, name: "BSM Bakit", loc: "Bakit, Parittiga", coords: [-1.643530765606718, 105.72355742472973] },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-700 hover:border-red-500/50 transition-all duration-300 shadow-xl"
              >
                {/* Map Container */}
                <div className="h-[400px] w-full relative z-0">
                  {/* Using the FooterMap component for the map view */}
                  {/* Note: In a real scenario, we'd enable interaction. Here visually similiar. */}
                  <FooterMap center={project.coords as [number, number]} zoom={12} />
                </div>

                {/* Content */}
                <div className="relative z-10 -mt-6 mx-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm border border-slate-700 p-5 rounded-2xl shadow-2xl group-hover:translate-y-[-5px] transition-transform duration-300">
                    <h3 className="text-xl font-bold text-black mb-1">{project.name}</h3>
                    <div className="flex items-center gap-2 text-black text-sm mb-4">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      {project.loc}
                    </div>
                    <div className="w-full h-px bg-slate-700 mb-4" />
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

          <div className="mt-16 text-center">
            <Link href="/project">
              <LiquidButton
                variant="default"
                size="lg"
                className="[--liquid-button-background-color:theme(colors.white)] [--liquid-button-color:theme(colors.black)] text-black bg-white hover:bg-gray-100 rounded-full px-10 py-6 font-bold tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                MORE PROJECTS
              </LiquidButton>
            </Link>
          </div>

        </div>
      </section>

      {/* Section 4 - Services (Process Style) */}
      <section className="relative py-24 px-6 lg:px-12 bg-neutral-900 overflow-hidden">
        {/* Background Image - CSS Parallax */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('/images/8.jpeg')" }}
          />
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/80 to-neutral-900/50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
            >
              Layanan <span className="text-red-600">Kami</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-red-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                id: "01",
                title: "PENGERUKAN & REKLAMASI",
                desc: "Solusi profesional untuk kebutuhan pengerukan alur dan reklamasi wilayah perairan.",
                icon: Ship
              },
              {
                id: "02",
                title: "PENYEWAAN ALAT TRANSPORTASI AIR",
                desc: "Aktivitas penyewaan dan sewa guna usaha tanpa hak opsi alat transportasi air yang fleksibel.",
                icon: Anchor
              },
              {
                id: "03",
                title: "PERDAGANGAN MATERIAL",
                desc: "Perdagangan besar semen, kapur, pasir, dan material konstruksi lainnya.",
                icon: Truck
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >

                {/* Card Shape - Arch Window Style */}
                <div className="relative w-full aspect-[4/5] bg-neutral-800 rounded-t-[100px] rounded-b-3xl p-8 pt-16 border border-neutral-700 hover:border-red-600 transition-colors duration-300 overflow-hidden shadow-2xl flex flex-col items-center">

                  {/* Glow Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-600/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-red-600/40 transition-all duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 bg-neutral-900 p-6 rounded-full border border-neutral-700 mb-8 group-hover:border-red-500 transition-colors duration-300 shadow-xl">
                    <service.icon className="w-10 h-10 text-white group-hover:text-red-500 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-bold text-white uppercase mb-4 tracking-wide group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-neutral-400 leading-relaxed max-w-[25ch]">
                    {service.desc}
                  </p>

                  {/* Bottom Line Indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-neutral-700 group-hover:bg-red-600 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Section 5 - FAQ / Why Choose Us */}
      <section className="relative py-24 px-6 lg:px-12 bg-white text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image */}
            <motion.div
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAccordion}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={faqItems.find(item => item.id === activeAccordion)?.image || "/images/3.jpeg"}
                    alt="FAQ Illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 left-8 text-white z-10 max-w-md">
                <motion.div
                  key={`text-${activeAccordion}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <p className="text-lg font-bold uppercase tracking-wider mb-2 text-red-500">Keunggulan Kami</p>
                  <h3 className="text-3xl font-black">{faqItems.find(item => item.id === activeAccordion)?.question}</h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-slate-900"
                >
                  Mengapa <span className="text-red-600">Memilih Kami?</span>
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ duration: 0.8 }}
                  className="h-1 bg-red-600 rounded-full"
                />
                <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                  Kami menghadirkan solusi pengerukan dan reklamasi yang tidak hanya efisien tetapi juga bertanggung jawab terhadap lingkungan dan sosial.
                </p>
              </div>

              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
                value={activeAccordion}
                onValueChange={(value) => value && setActiveAccordion(value)}
              >
                {faqItems.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={faq.id}
                    className="border border-neutral-200 rounded-xl px-4 data-[state=open]:border-red-200 data-[state=open]:bg-red-50/50 transition-colors"
                  >
                    <AccordionTrigger className="text-lg font-bold text-slate-800 hover:text-red-600 hover:no-underline py-5 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Section 6 - Explore More CTA */}
      <section className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px] w-full">
          {/* Column 1 - Profile */}
          <div className="group relative w-full h-full overflow-hidden border-r border-neutral-800">
            {/* Background Parallax */}
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/1.jpeg')" }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Red Overlay - Slide Down */}
            <div className="absolute inset-0 bg-red-600/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <span className="text-white/80 text-sm font-bold tracking-[0.2em] mb-4 uppercase group-hover:text-white transition-colors">Get To Know BSM</span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                Profil<br />Perusahaan
              </h3>
              <Link href="/about">
                <LiquidButton
                  variant="ghost"
                  className="text-white border-white hover:bg-white hover:text-red-600 rounded-none px-8 py-4 uppercase tracking-widest text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
                >
                  Lihat Lebih Lanjut
                </LiquidButton>
              </Link>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="group relative w-full h-full overflow-hidden border-r border-neutral-800">
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/8.jpeg')" }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 bg-red-600/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-100" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <span className="text-white/80 text-sm font-bold tracking-[0.2em] mb-4 uppercase group-hover:text-white transition-colors">Our Specialization</span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                Dredging &<br />Reclamation
              </h3>
              <Link href="/dredging">
                <LiquidButton
                  variant="ghost"
                  className="text-white border-white hover:bg-white hover:text-red-600 rounded-none px-8 py-4 uppercase tracking-widest text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
                >
                  Lihat Layanan
                </LiquidButton>
              </Link>
            </div>
          </div>

          {/* Column 3 - Career/Contact */}
          <div className="group relative w-full h-full overflow-hidden">
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/4.jpeg')" }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 bg-red-600/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-200" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <span className="text-white/80 text-sm font-bold tracking-[0.2em] mb-4 uppercase group-hover:text-white transition-colors">Our Gallery</span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                Projects<br />Location
              </h3>
              <Link href="/project">
                <LiquidButton
                  variant="ghost"
                  className="text-white border-white hover:bg-white hover:text-red-600 rounded-none px-8 py-4 uppercase tracking-widest text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
                >
                  Lihat Proyek
                </LiquidButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Final CTA Button */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight uppercase">
              Siap untuk <span className="text-red-600 block mt-2">Memulai Proyek Anda?</span>
            </h2>
            <Link href="/contact" className="inline-block">
              <LiquidButton
                variant="destructive"
                size="lg"
                className="px-12 py-8 text-xl rounded-full uppercase tracking-widest font-bold [--liquid-button-background-color:theme(colors.red.600)] [--liquid-button-color:theme(colors.white)] text-white hover:text-green-600 transition-colors"
              >
                Hubungi Kami
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div >
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu, NavbarMenuSection } from "@/components/ui/navbar-menu";
import { Ship, Building2, Camera } from "lucide-react";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { Curve } from "@/components/ui/curve-menu";

interface NavbarProps {
  hideLogoOnHome?: boolean;
}

const Navbar = ({ hideLogoOnHome = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 z-50 px-3 sm:px-6 lg:px-8 left-0 right-0 border-b border-white/80 transition-colors duration-300`}
      initial={{ backdropFilter: "blur(0px)" }}
      animate={{
        backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Gradient Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white from-30% to-red-700 to-70% pointer-events-none"
        style={{ zIndex: -1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <div className="flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <div className="shrink-0">
          {/* Mobile Logo: Always visible */}
          <div className="lg:hidden">
            <Link href="/" className="text-white font-bold flex flex-col">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
            </Link>
          </div>

          {/* Desktop Logo: Follows hideLogoOnHome logic */}
          <div className="hidden lg:block">
            <AnimatePresence>
              {!hideLogoOnHome && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="/" className="text-white font-bold flex flex-col">
                    <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="w-[50px] h-[50px]" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="ml-8 flex items-center space-x-6">
            <Link href="/" className={`relative group ${isScrolled ? "text-white" : "text-red-600"} px-1 py-2 text-sm font-medium transition-colors duration-200`}>
              Beranda
              <span className={`absolute left-0 bottom-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full ${pathname === "/" ? "w-full" : "w-0"}`} />
            </Link>
            <Link href="/about" className={`relative group ${isScrolled ? "text-white" : "text-red-600"} px-1 py-2 text-sm font-medium transition-colors duration-200`}>
              Tentang Kami
              <span className={`absolute left-0 bottom-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full ${pathname === "/about" ? "w-full" : "w-0"}`} />
            </Link>

            <Link href="/dredging" className={`relative group ${isScrolled ? "text-white" : "text-red-600"} px-1 py-2 text-sm font-medium transition-colors duration-200`}>
              Dredging & Reclamation
              <span className={`absolute left-0 bottom-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full ${pathname === "/dredging" ? "w-full" : "w-0"}`} />
            </Link>
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu("gallery")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`bg-transparent ${isScrolled ? "text-white" : "text-red-600"} hover:bg-transparent focus:bg-transparent text-sm font-medium group flex items-center gap-1`}
              >
                <span className="relative">
                  Galeri
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full ${["/armada", "/project", "/gallery"].includes(pathname) ? "w-full" : "w-0"}`} />
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === "gallery" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === "gallery" && (
                  <NavbarMenu
                    activeMenu={activeMenu}
                    sections={[
                      {
                        id: "gallery",
                        gridLayout: "grid grid-cols-3 gap-6",
                        links: [
                          {
                            label: "Armada",
                            href: "/armada",
                            description: "Explore our fleet.",
                            icon: <Ship className="w-4 h-4" />,
                          },
                          {
                            label: "Project",
                            href: "/project",
                            description: "View our reclamation projects.",
                            icon: <Building2 className="w-4 h-4" />,
                          },
                          {
                            label: "Photo",
                            href: "/gallery",
                            description: "Gallery of our operations.",
                            icon: <Camera className="w-4 h-4" />,
                          },
                        ],
                      },
                    ]}
                  />
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact">
              <LiquidButton variant="ghost" size="sm" className={`${isScrolled ? "text-white" : "text-red-600"} border border-white/50 hover:border-white hover:text-green-600 text-sm rounded-full px-6`}>
                Hubungi Kami
              </LiquidButton>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className={`${isScrolled ? "text-white" : "text-red-600"} hover:opacity-70 p-4 transition-colors duration-200`}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="lg:hidden fixed top-0 right-0 h-screen w-[75%] max-w-sm z-50"
              initial={{ x: "calc(100% + 100px)" }}
              animate={{ x: 0 }}
              exit={{ x: "calc(100% + 100px)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <Curve />
              <div className="h-full w-full bg-white shadow-2xl overflow-y-auto relative z-10">
                <div className="p-6 space-y-6">
                  {/* Header with Close Button */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-slate-900">Menu</span>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-slate-900" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <Link href="/" className="text-slate-800 hover:text-red-600 block py-3 px-2 text-base font-medium transition-colors duration-200 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                      Beranda
                    </Link>
                    <Link href="/about" className="text-slate-800 hover:text-red-600 block py-3 px-2 text-base font-medium transition-colors duration-200 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                      Tentang Kami
                    </Link>
                    <Link href="/dredging" className="text-slate-800 hover:text-red-600 block py-3 px-2 text-base font-medium transition-colors duration-200 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                      Dredging & Reclamation
                    </Link>

                    {/* Gallery Submenu */}
                    <div className="py-2 px-2 border-b border-gray-100">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Galeri</p>
                      <div className="pl-4 space-y-2">
                        <Link href="/armada" className="text-slate-700 hover:text-red-600 flex items-center gap-3 py-2 text-sm font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          <Ship className="w-4 h-4" /> Armada
                        </Link>
                        <Link href="/project" className="text-slate-700 hover:text-red-600 flex items-center gap-3 py-2 text-sm font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          <Building2 className="w-4 h-4" /> Project
                        </Link>
                        <Link href="/gallery" className="text-slate-700 hover:text-red-600 flex items-center gap-3 py-2 text-sm font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          <Camera className="w-4 h-4" /> Photo
                        </Link>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <div className="pt-6">
                      <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                        <LiquidButton
                          variant="default"
                          size="lg"
                          className="w-full bg-red-600 hover:bg-black text-white hover:text-white rounded-full py-6 font-bold tracking-wide shadow-lg [--liquid-button-background-color:theme(colors.black)] [--liquid-button-color:theme(colors.white)]"
                        >
                          Hubungi Kami
                        </LiquidButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

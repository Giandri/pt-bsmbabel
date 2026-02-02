"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import for Leaflet map to avoid SSR issues
const FooterMap = dynamic(() => import("./footer-map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-40 rounded-xl bg-white/10 animate-pulse flex items-center justify-center">
            <span className="text-white/50 text-sm">Loading map...</span>
        </div>
    ),
});

const Footer = () => {
    return (
        <footer className="px-6 lg:px-12 pb-8">
            <div className="bg-red-800 text-white rounded-3xl max-w-8xl mx-auto overflow-hidden">
                <div className="px-6 sm:px-10 lg:px-16 py-8 sm:py-12 relative">
                    {/* Left side - Large Logo/Graphic (hidden on mobile) */}
                    <div className="hidden md:block absolute left-15 top-25 -translate-y-1/2 w-50 h-50 pointer-events-none">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    {/* Company name below logo (hidden on mobile) */}
                    <p className="hidden md:block absolute left-13 top-45 text-white font-bold text-lg tracking-wide">
                        PT. BANGKA SAND MINING
                    </p>

                    {/* Mobile header with logo */}
                    <div className="md:hidden flex flex-col items-center mb-8">
                        <div className="relative w-20 h-20 mb-2">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-white font-bold text-sm tracking-wide text-center">
                            PT. BANGKA SAND MINING
                        </p>
                    </div>

                    {/* Right side - Links and Map */}
                    <div className="relative z-10 flex justify-center md:justify-end md:right-15">
                        <div className="flex flex-col lg:flex-row gap-8">

                            {/* Column 1 - Links */}
                            <div className="space-y-4 text-center md:text-left">
                                <Link href="/about" className="block text-white/80 hover:text-white transition-colors text-sm">
                                    Tentang Kami
                                </Link>
                                <Link href="/dredging" className="block text-white/80 hover:text-white transition-colors text-sm">
                                    Dredging & Reclamation
                                </Link>
                                <Link href="/armada" className="block text-white/80 hover:text-white transition-colors text-sm">
                                    Armada
                                </Link>
                                <Link href="/project" className="block text-white/80 hover:text-white transition-colors text-sm">
                                    Project
                                </Link>
                                <Link href="/gallery" className="block text-white/80 hover:text-white transition-colors text-sm">
                                    Galeri
                                </Link>
                            </div>

                            {/* Column 2 - Address & Map */}
                            <div className="flex-1 max-w-sm space-y-4">
                                <p className="text-white/80 text-sm leading-relaxed text-center md:text-left">
                                    Drummerlands, Jl .ahay No.9, Tarom, <br />
                                    Kace Mendo Barat Kab. Bangka <br />
                                    Prov.Kep.Bangka Belitung, 33173
                                </p>
                                <div className="h-32 w-full rounded-xl overflow-hidden shadow-lg border border-white/10 relative z-0">
                                    <FooterMap />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="relative z-10 mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-xs">
                            © BSM 2026
                        </p>
                        <p className="text-white/50 text-xs">
                            Made by Loggs Visual
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/smooth-scroll";
import PageTransitionProvider from "@/components/page-transition-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bsm.co.id"),
  title: {
    template: "%s | PT. BSM Babel",
    default: "PT. BSM Babel - Pengerukan & Reklamasi",
  },
  description: "PT. Bangka Sand Mining (BSM) - Perusahaan nasional terkemuka di bidang pengerukan, reklamasi, pertambangan pasir, dan jasa maritim di Bangka Belitung, Indonesia.",
  keywords: [
    "pengerukan",
    "reklamasi",
    "pertambangan pasir",
    "sand mining",
    "dredging",
    "reclamation",
    "jasa maritim",
    "bangka belitung",
    "BSM",
    "PT Bangka Sand Mining",
    "kapal keruk",
    "CSD",
    "cutter suction dredger",
    "anchor boat",
    "infrastruktur pelabuhan",
  ],
  authors: [{ name: "PT. Bangka Sand Mining" }],
  creator: "PT. BSM Babel",
  publisher: "PT. Bangka Sand Mining",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bsmbabel.com",
    siteName: "PT. BSM Babel",
    title: "PT. BSM Babel - Pengerukan & Reklamasi",
    description: "Perusahaan nasional terkemuka di bidang pengerukan, reklamasi, pertambangan pasir, dan jasa maritim.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT. Bangka Sand Mining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. BSM Babel - Pengerukan & Reklamasi",
    description: "Perusahaan nasional terkemuka di bidang pengerukan, reklamasi, dan pertambangan pasir.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import BanterLoader from "./banter-loader";

interface FooterMapProps {
  center?: [number, number];
  zoom?: number;
}

const FooterMap = ({ center = [-2.1590498961220628, 106.02904458375886], zoom = 11 }: FooterMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Cleanup map on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted || !mapContainerRef.current) return;

    // Use a small timeout to ensure container has dimensions
    const timer = setTimeout(() => {
      if (!mapInstanceRef.current && mapContainerRef.current) {
        // Initialize Map
        const map = L.map(mapContainerRef.current, {
          center,
          zoom,
          scrollWheelZoom: false,
          zoomControl: false,
          attributionControl: false,
        });

        // Add Tile Layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Create Icon manually
        const pulsingIcon = L.divIcon({
          className: "custom-pin-marker",
          html: `
                    <div class="relative w-10 h-10">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-red-600/40 rounded-full animate-ping"></div>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 border-4 border-white rounded-full shadow-lg z-10"></div>
                    </div>
                `,
          iconSize: [40, 40],
          iconAnchor: [20, 20],
          popupAnchor: [0, -20],
        });

        // Add Marker
        const marker = L.marker(center, { icon: pulsingIcon }).addTo(map);

        const popupContent = document.createElement("div");
        popupContent.innerHTML = '<span class="font-semibold text-slate-900">PT. Bangka Sand Mining</span>';
        marker.bindPopup(popupContent);

        mapInstanceRef.current = map;
      } else if (mapInstanceRef.current) {
        // Update Center/Zoom if changed
        mapInstanceRef.current.setView(center, zoom);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted, center, zoom]);

  if (!isMounted) {
    return (
      <div className="w-full h-full overflow-hidden rounded-xl z-0 relative bg-slate-200">
        <BanterLoader />
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-hidden rounded-xl z-0 relative">
      <div
        ref={mapContainerRef}
        className="h-full w-full z-0"
        style={{ minHeight: "100%" }}
      />
    </div>
  );
};

export default FooterMap;

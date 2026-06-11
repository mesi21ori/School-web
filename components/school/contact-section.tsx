"use client";

import { useEffect, useRef } from "react";
import { School } from "@/types/school";
import { ContactForm } from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactSectionProps {
  school: School;
}

interface Branch {
  name: string;
  latitude: number;
  longitude: number;
}

const defaultBranches: Branch[] = [
  { name: "MAIN CAMPUS / YEKA", latitude: 9.0357, longitude: 38.7895 },
  { name: "BOLE BRANCH", latitude: 8.9806, longitude: 38.7578 },
  { name: "SUMMIT BRANCH", latitude: 9.0261, longitude: 38.8684 },
  { name: "AYAT BRANCH", latitude: 9.0299, longitude: 38.8802 },
  { name: "PIASSA BRANCH", latitude: 9.0369, longitude: 38.7516 },
  { name: "SARIS BRANCH", latitude: 8.9357, longitude: 38.7578 },
  { name: "MEXICO BRANCH", latitude: 9.0105, longitude: 38.7418 },
  { name: "22 MAZORIA BRANCH", latitude: 9.0227, longitude: 38.7809 },
  { name: "CMC BRANCH", latitude: 9.0192, longitude: 38.8378 },
  { name: "LEBU BRANCH", latitude: 8.9587, longitude: 38.7045 },
];

export function ContactSection({ school }: ContactSectionProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const branches = school.branches || defaultBranches;

  const centerLat =
    branches.reduce((sum, branch) => sum + branch.latitude, 0) / branches.length;

  const centerLng =
    branches.reduce((sum, branch) => sum + branch.longitude, 0) / branches.length;

  useEffect(() => {
    const existingLeafletCss = document.querySelector(
      'link[href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]'
    );

    if (!existingLeafletCss) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const initializeMap = () => {
      if (!mapRef.current || typeof window === "undefined") return;

      const L = (window as any).L;
      if (!L) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      const map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
      }).setView([centerLat, centerLng], 10);

      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      branches.forEach((branch) => {
        const marker = L.marker([branch.latitude, branch.longitude]).addTo(map);
        marker.bindPopup(`<b>${branch.name}</b>`);
      });

      const bounds = L.latLngBounds(
        branches.map((branch) => [branch.latitude, branch.longitude])
      );

      map.fitBounds(bounds, {
        padding: [35, 35],
        maxZoom: 11,
      });
    };

    if ((window as any).L) {
      initializeMap();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener("load", initializeMap);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [branches, centerLat, centerLng]);

  return (
    <section id="contact" className="py-12 bg-secondary/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: school.primaryColor }}
          >
            Contact With Us
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Send us a message and we'll respond as soon as possible
          </p>

          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{
              backgroundColor: school.accentColor || school.primaryColor,
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-5">
              Send us a Message
            </h3>
            <ContactForm
              primaryColor={school.primaryColor}
              contact={school.contact}
            />
          </div>
          {/* Contact Details */}

          <div className="rounded-xl overflow-hidden shadow-md border border-border bg-white dark:bg-gray-800">
            <div ref={mapRef} className="w-full h-[410px]" />

            <div className="p-3 text-center text-xs text-muted-foreground bg-white dark:bg-gray-800 border-t border-border">
              📍 Showing all {branches.length} branch locations on map
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
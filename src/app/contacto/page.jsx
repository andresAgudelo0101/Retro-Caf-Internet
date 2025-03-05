"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Contacto() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = L.map(mapContainer.current).setView(
      [6.056235656557109, -75.5030902713936],
      14
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([6.056235656557109, -75.5030902713936])
      .addTo(map)
      .bindPopup("Retro Cafe")
      .openPopup();

    return () => map.remove();
  }, []);

  return (
    <>
      <Header />
      <div className="w-100 h-screen bg-white grid grid-cols-1 md:grid-cols-2 justify-center items-center p-6 gap-2">
        <div className="w-full bg-slate-900 h-96">
          <h1>Escribenos</h1>
        </div>
        <div ref={mapContainer} className="w-full h-96" />
      </div>
      <Footer />
    </>
  );
}

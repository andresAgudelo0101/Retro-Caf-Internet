"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function Contacto() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW5kcmVzMTEyOTgiLCJhIjoiY2wwdmhqZXJqMGo4dTNrbXRobm1pc3JwdiJ9.esLY4egXP8RS0iwrCkl15A";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/andres11298/cl0vhlric000h14qpffv5407k",
      center: [-75.50307617472883, 6.056310352427602],
      zoom: 15.18,
    });

    mapRef.current.on("load", () => {
      mapRef.current.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        (error, image) => {
          if (error) throw error;
          mapRef.current.addImage("custom-marker", image);

          mapRef.current.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-75.50307617472883, 6.056310352427602],
                  },
                  properties: {
                    title: "Retro Cafe",
                  },
                },
              ],
            },
          });

          mapRef.current.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });
  }, []);

  return (
    <>
      <Header />
      <div className="w-100 h-screen bg-white grid grid-cols-1 md:grid-cols-2 justify-center items-center p-6 gap-2">
        <div className="w-full bg-slate-900 h-96">
          <h1>Escribenos</h1>
        </div>
        <div
          id="map"
          ref={mapContainerRef}
          className="w-full h-96 overflow-hidden bg-gray-200  rounded"
        />
      </div>
      <Footer />
    </>
  );
}

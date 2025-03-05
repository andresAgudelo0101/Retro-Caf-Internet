// components/Map.js

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Carga dinámica de los componentes de react-leaflet

const Map = () => {
  const position = [6.056395704059504, -75.50308690356476]; // Coordenadas de Londres

  return (
    <MapContainer center={position} zoom={14} className="w-full h-96">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Retro Cafe Internet</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

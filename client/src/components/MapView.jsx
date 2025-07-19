import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";

const MapView = ({ onAddEntry, entries }) => {
  const [position, setPosition] = useState(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        onAddEntry(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapClickHandler />

      {/* New marker from clicking */}
      {position && (
        <Marker position={position}>
          <Popup>New Entry Location</Popup>
        </Marker>
      )}

      {/* Existing entries from DB */}
      {entries.map((entry, idx) => (
        <Marker key={idx} position={[entry.location.lat, entry.location.lng]}>
          <Popup>
            <strong>{entry.title}</strong>
            <br />
            {entry.note}
            <br />
            <em>{entry.date}</em>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";

const MapView = ({ onAddEntry, entries }) => {
  const [clickedPos, setClickedPos] = useState(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setClickedPos({ lat, lng });
        onAddEntry({ lat, lng });
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

      {/* Optional preview marker for new entry */}
      {clickedPos && (
        <Marker position={[clickedPos.lat, clickedPos.lng]}>
          <Popup>New Entry Location</Popup>
        </Marker>
      )}

      {/* Existing entries from database */}
      {entries?.map((entry, i) => (
        <Marker key={i} position={[entry.location.lat, entry.location.lng]}>
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

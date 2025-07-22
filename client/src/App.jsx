import { useState, useEffect } from "react";
import MapView from "./components/MapView";
import EntryModal from "./components/EntryModal";
import axios from "axios";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (latlng) => {
    setSelectedLocation(latlng);
    setModalOpen(true);
  };

  const handleSaveEntry = async (entryData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/entries",
        entryData
      );
      console.log("Entry saved:", response.data);
      setEntries((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  const handleDeleteEntry = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/entries/${id}`);
      setEntries((prev) => prev.filter((entry) => entry._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Load entries from backend
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/entries");
        setEntries(res.data);
      } catch (err) {
        console.error("Error fetching entries:", err);
      }
    };

    fetchEntries();
  }, []);

  return (
    <>
      <MapView
        onAddEntry={handleAddEntry}
        entries={entries}
        onDelete={handleDeleteEntry}
      />
      <EntryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSaveEntry}
        location={selectedLocation}
      />
    </>
  );
}

export default App;

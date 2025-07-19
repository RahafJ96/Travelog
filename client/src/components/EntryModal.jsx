import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function EntryModal({ isOpen, onClose, onSubmit, location }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!title || !note || !date) return;
    onSubmit({ title, note, date, location });
    setTitle("");
    setNote("");
    setDate("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <Dialog.Panel className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl space-y-4">
        <Dialog.Title className="text-xl font-bold">
          Add Travel Entry
        </Dialog.Title>

        <div className="space-y-2">
          <input
            type="text"
            placeholder="Location title"
            className="w-full px-4 py-2 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Write your travel notes here..."
            className="w-full px-4 py-2 border rounded-md"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

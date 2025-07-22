# 🌍 Travelog — Interactive Travel Journal

Travelog is a full-stack web application that lets users document their travel experiences on an interactive world map. Users can pin locations, write personal journal entries, and (soon) upload photos to visually capture their adventures.

---

## ✨ Features

- 🗺 **Interactive World Map**  
  Explore and zoom into any part of the world using Leaflet.js
- 📍 **Click-to-Pin Travel Locations**  
  Click anywhere on the map to create a new travel journal entry
- ✍️ **Add Notes & Dates**  
  Fill out a simple form to describe your trip and select the visit date

- 💾 **Persistent Storage**  
  Entries are stored in a MongoDB database and reloaded on every visit

- 📌 **View Saved Entries**  
  All previous travel entries are shown as map markers with popups

- 🖼️ _(Coming Soon)_: Photo upload via Cloudinary  
  Upload images from your trips and attach them to your journal entry

---

## 🧰 Tech Stack

| Layer       | Tools Used                           |
| ----------- | ------------------------------------ |
| Frontend    | React, Vite, TailwindCSS, Leaflet.js |
| Backend     | Node.js, Express                     |
| Database    | MongoDB, Mongoose                    |
| APIs        | OpenStreetMap, Cloudinary (upcoming) |
| Other Tools | Axios, Headless UI (Modal)           |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/travelog.git
cd travelog
```

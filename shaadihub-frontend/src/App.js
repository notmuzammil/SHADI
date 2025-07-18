import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Landmark, Utensils, Car, Flower2, Shirt, Hand } from "lucide-react";
import Search from './pages/Search';
import VendorProfile from './pages/VendorProfile';
import Booking from './pages/Booking';
import Reviews from './pages/Reviews';
import Home from './pages/Home';
import Venues from './pages/Venues';
import Catering from './pages/Catering';
import Cars from './pages/Cars';
import Decor from './pages/Decor';
import Wardrobe from './pages/Wardrobe';
import Henna from './pages/Henna';

function VendorDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-1/2 left-4 z-50 transform -translate-y-1/2">
      <button
        className="bg-gradient-to-br from-pink-900 to-pink-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-pink-800 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open vendor menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      {open && (
        <div className="mt-4 bg-white/95 rounded-2xl shadow-2xl border-2 border-emerald-900 p-4 flex flex-col gap-3 min-w-[180px] animate-fade-in">
          <Link to="/venues" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-100 text-emerald-900 font-semibold transition"><Landmark size={20} /> Venues</Link>
          <Link to="/catering" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-100 text-emerald-900 font-semibold transition"><Utensils size={20} /> Catering</Link>
          <Link to="/cars" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-100 text-emerald-900 font-semibold transition"><Car size={20} /> Rental Cars</Link>
          <Link to="/decor" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-100 text-emerald-900 font-semibold transition"><Flower2 size={20} /> Custom Decor</Link>
          <Link to="/wardrobe" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-100 text-emerald-900 font-semibold transition"><Shirt size={20} /> Wardrobe</Link>
          <Link to="/henna" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-100 text-emerald-900 font-semibold transition"><Hand size={20} /> Henna</Link>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .border-gold-200 { border-color: #e6c200; }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <VendorDropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/henna" element={<Henna />} />
        <Route path="/search" element={<Search />} />
        <Route path="/vendors/:id" element={<VendorProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

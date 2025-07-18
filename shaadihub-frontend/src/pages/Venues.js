import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const venues = [
    { name: 'Royal Marquee Hall', location: 'DHA, Karachi', availability: 'Available', reviews: 12 },
    { name: 'Blossom Banquet', location: 'Clifton, Karachi', availability: 'Limited', reviews: 8 },
    { name: 'Gardenia Farmhouse', location: 'Malir, Karachi', availability: 'Available', reviews: 15 },
    { name: 'Pearl Palace', location: 'Gulshan, Karachi', availability: 'Booked', reviews: 5 },
    { name: 'Sunset Gardens', location: 'Korangi, Karachi', availability: 'Available', reviews: 10 },
];

export default function Venues() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-pink-100 py-16 px-4 relative">
            <Link to="/" className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform font-inter font-semibold border-2 border-pink-300">
                <Home size={22} className="mr-1" /> Home
            </Link>
            <h1 className="text-4xl font-playfair font-bold mb-6 text-center bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Venues</h1>
            <p className="text-lg text-gray-800 mb-10 text-center font-inter">Browse and book the best venues for your wedding, including marquee halls, farmhouses, and gardens.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {venues.map((venue, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-xl border border-pink-300 p-6 flex flex-col gap-2 hover:shadow-pink-300 transition-shadow">
                        <h2 className="text-2xl font-playfair font-bold text-pink-500 mb-1">{venue.name}</h2>
                        <div className="text-pink-500 font-inter mb-1">{venue.location}</div>
                        <div className="text-pink-500 font-semibold mb-2 font-inter">{venue.availability}</div>
                        <div className="text-pink-500 font-inter text-sm">{venue.reviews} reviews</div>
                    </div>
                ))}
            </div>
        </div>
    );
} 
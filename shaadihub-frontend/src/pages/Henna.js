import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const hennas = [
    { name: 'Mehndi Magic', location: 'DHA, Karachi', availability: 'Available', reviews: 16 },
    { name: 'Henna Artistry', location: 'Clifton, Karachi', availability: 'Booked', reviews: 9 },
    { name: 'Bridal Henna', location: 'Gulshan, Karachi', availability: 'Available', reviews: 12 },
    { name: 'Elite Mehndi', location: 'Nazimabad, Karachi', availability: 'Limited', reviews: 8 },
];

export default function Henna() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-pink-100 py-16 px-4 relative">
            <Link to="/" className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-gradient-to-r from-pink-700 to-pink-900 text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform font-inter font-semibold border-2 border-pink-800">
                <Home size={22} className="mr-1" /> Home
            </Link>
            <h1 className="text-4xl font-playfair font-bold mb-6 text-center bg-gradient-to-r from-pink-700 via-pink-600 to-pink-900 bg-clip-text text-transparent drop-shadow-lg">Henna Bookings</h1>
            <p className="text-lg text-gray-800 mb-10 text-center font-inter">Book the best henna artists and salons for your wedding events.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {hennas.map((henna, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-xl border border-pink-800 p-6 flex flex-col gap-2 hover:shadow-green-200 transition-shadow">
                        <h2 className="text-2xl font-playfair font-bold text-pink-800 mb-1">{henna.name}</h2>
                        <div className="text-pink-800 font-inter mb-1">{henna.location}</div>
                        <div className="text-pink-800 font-semibold mb-2 font-inter">{henna.availability}</div>
                        <div className="text-pink-800 font-inter text-sm">{henna.reviews} reviews</div>
                    </div>
                ))}
            </div>
        </div>
    );
} 
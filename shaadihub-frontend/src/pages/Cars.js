import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const cars = [
    { name: 'Classic Limousine', location: 'DHA, Karachi', availability: 'Available', reviews: 7 },
    { name: 'Royal Rides', location: 'Clifton, Karachi', availability: 'Booked', reviews: 5 },
    { name: 'Elite Cars', location: 'Gulshan, Karachi', availability: 'Available', reviews: 10 },
    { name: 'Wedding Wheels', location: 'Nazimabad, Karachi', availability: 'Limited', reviews: 4 },
];

export default function Cars() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-pink-100 py-16 px-4 relative">
            <Link to="/" className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform font-inter font-semibold border-2 border-pink-300">
                <Home size={22} className="mr-1" /> Home
            </Link>
            <h1 className="text-4xl font-playfair font-bold mb-6 text-center bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Rental Cars</h1>
            <p className="text-lg text-gray-800 mb-10 text-center font-inter">Browse luxury and classic cars for your wedding day transportation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {cars.map((car, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-xl border border-pink-300 p-6 flex flex-col gap-2 hover:shadow-emerald-400 transition-shadow">
                        <h2 className="text-2xl font-playfair font-bold text-pink-500 mb-1">{car.name}</h2>
                        <div className="text-pink-500 font-inter mb-1">{car.location}</div>
                        <div className="text-pink-500 font-semibold mb-2 font-inter">{car.availability}</div>
                        <div className="text-pink-500 font-inter text-sm">{car.reviews} reviews</div>
                    </div>
                ))}
            </div>
        </div>
    );
} 
import React from "react";
import { Landmark, Utensils, Flower2, Car, Shirt, Hand, CalendarCheck, BadgeCheck, Users, Sparkles, MessageSquare, Heart } from "lucide-react";

const vendors = [
    {
        name: "Royal Marquee Hall",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        location: "DHA, Karachi",
        rating: 4.8,
        price: "PKR 250,000+",
        featured: true,
    },
    {
        name: "Blossom Banquet",
        image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        location: "Clifton, Karachi",
        rating: 4.6,
        price: "PKR 180,000+",
        featured: false,
    },
    {
        name: "Gardenia Farmhouse",
        image:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
        location: "Malir, Karachi",
        rating: 4.9,
        price: "PKR 300,000+",
        featured: true,
    },
    {
        name: "Pearl Palace",
        image:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        location: "Gulshan, Karachi",
        rating: 4.7,
        price: "PKR 220,000+",
        featured: false,
    },
    {
        name: "Sunset Gardens",
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        location: "Korangi, Karachi",
        rating: 4.5,
        price: "PKR 170,000+",
        featured: false,
    },
    {
        name: "Elite Events",
        image:
            "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
        location: "Nazimabad, Karachi",
        rating: 4.8,
        price: "PKR 260,000+",
        featured: true,
    },
];

const testimonials = [
    {
        name: "Ayesha & Bilal",
        quote: "ShaadiHub made our wedding planning stress-free and fun! The vendor options were amazing.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Sara & Imran",
        quote: "We found the perfect venue and caterer in minutes. Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Fatima & Usman",
        quote: "The interactive experience and beautiful design made us fall in love with ShaadiHub.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Zainab & Ali",
        quote: "The pastel theme and easy navigation made our planning journey a joy!",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
];

const categories = [
    { name: "Venues", icon: <Landmark size={32} color="black" /> },
    { name: "Catering", icon: <Utensils size={32} color="black" /> },
    { name: "Decor", icon: <Flower2 size={32} color="black" /> },
    { name: "Cars", icon: <Car size={32} color="black" /> },
    { name: "Wardrobe", icon: <Shirt size={32} color="black" /> },
    { name: "Henna & Salons", icon: <Hand size={32} color="black" /> },
];

const heroPhotos = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
];

export default function Home(props) {
    const [testimonialIdx, setTestimonialIdx] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIdx((i) => (i + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-pink-100 font-sans flex flex-col relative overflow-x-hidden">
            {/* Decorative SVGs */}
            <svg className="absolute top-0 left-0 w-64 h-64 opacity-30 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle fill="#f472b6" cx="100" cy="100" r="100" /></svg>
            <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-20 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle fill="#f472b6" cx="100" cy="100" r="100" /></svg>
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
            {/* Sticky Navbar */}
            <nav className="sticky top-0 z-30 bg-white/70 backdrop-blur-lg border-b border-rose-100 shadow-lg flex items-center justify-between px-10 py-5 rounded-b-3xl mx-2 mt-2">
                <div className="flex items-center gap-3">
                    <span className="text-4xl font-playfair tracking-tight drop-shadow relative flex items-center justify-center">
                        <span className="inline-block relative">
                            <Heart size={36} className="text-red-500" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
                            <Sparkles size={18} className="absolute -top-2 -right-2 text-pink-300" />
                        </span>
                    </span>
                    <span className="text-3xl font-playfair text-gray-800 tracking-tight drop-shadow">ShaadiHub Karachi</span>
                </div>
                <div className="hidden md:flex gap-6 font-inter text-gray-700 text-lg">
                    <a href="#vendors" className="relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-rose-100/70 hover:text-rose-500 focus:bg-rose-200/80 focus:text-rose-600 group">
                        <span className="z-10 relative">Vendors</span>
                        <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-2/3 group-focus:w-2/3 h-1 bg-gradient-to-r from-rose-300 to-yellow-200 rounded-full transition-all duration-300 -translate-x-1/2"></span>
                    </a>
                    <a href="#how" className="relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-rose-100/70 hover:text-rose-500 focus:bg-rose-200/80 focus:text-rose-600 group">
                        <span className="z-10 relative">How It Works</span>
                        <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-2/3 group-focus:w-2/3 h-1 bg-gradient-to-r from-rose-300 to-yellow-200 rounded-full transition-all duration-300 -translate-x-1/2"></span>
                    </a>
                    <a href="#testimonials" className="relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-rose-100/70 hover:text-rose-500 focus:bg-rose-200/80 focus:text-rose-600 group">
                        <span className="z-10 relative">Reviews</span>
                        <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-2/3 group-focus:w-2/3 h-1 bg-gradient-to-r from-rose-300 to-yellow-200 rounded-full transition-all duration-300 -translate-x-1/2"></span>
                    </a>
                    <a href="#contact" className="relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-rose-100/70 hover:text-rose-500 focus:bg-rose-200/80 focus:text-rose-600 group">
                        <span className="z-10 relative">Contact</span>
                        <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-2/3 group-focus:w-2/3 h-1 bg-gradient-to-r from-rose-300 to-yellow-200 rounded-full transition-all duration-300 -translate-x-1/2"></span>
                    </a>
                </div>
                <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-7 py-2.5 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform border-2 border-pink-300 text-lg">
                    Become a Vendor
                </button>
            </nav>
            {/* Hero Section: Dark green to black, spark gold gradient text, white buttons, gold/white motifs */}
            <header className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center overflow-hidden w-full">
                {/* Dark green to black gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-200 to-white pointer-events-none" />
                {/* Spark gold decorative rings/motifs */}
                <svg className="absolute -top-10 -left-10 w-40 h-40 opacity-60 -z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="goldSpark1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#fffbe6" />
                            <stop offset="60%" stopColor="#FFD700" />
                            <stop offset="100%" stopColor="#FFB300" />
                        </radialGradient>
                    </defs>
                    <circle fill="url(#goldSpark1)" cx="100" cy="100" r="100" />
                </svg>
                <svg className="absolute bottom-0 right-0 w-56 h-56 opacity-40 -z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="goldSpark2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#fffbe6" />
                            <stop offset="60%" stopColor="#FFD700" />
                            <stop offset="100%" stopColor="#FFB300" />
                        </radialGradient>
                    </defs>
                    <circle fill="url(#goldSpark2)" cx="100" cy="100" r="100" />
                </svg>
                <div className="relative z-10 flex flex-col items-center animate-fade-in w-full max-w-2xl mx-auto">
                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-4 leading-tight drop-shadow-lg tracking-tight bg-gradient-to-r from-pink-900 via-pink-800 to-pink-700 bg-clip-text text-transparent shimmer-gold">
                        Your Dream Wedding Starts Here
                    </h1>
                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl mb-10 font-inter font-semibold bg-gradient-to-r from-pink-900 via-pink-800 to-pink-700 bg-clip-text text-transparent shimmer-gold">
                        Karachi's most beautiful venues & trusted vendors, all in one place. Curated, reviewed, and ready for your big day.
                    </p>
                    {/* Search Bar with Label */}
                    <div className="w-full max-w-lg mx-auto mb-6">
                        <label htmlFor="hero-search" className="block text-lg font-inter font-semibold mb-2 text-left" style={{ color: '#fffbe6' }}>Find venues, caterers, planners, and more:</label>
                        <div className="flex gap-4">
                            <input
                                id="hero-search"
                                type="text"
                                placeholder="e.g. Marquee, Catering, Car..."
                                className="px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200 w-full font-inter bg-white/90 text-black"
                            />
                            <button className="bg-white text-emerald-900 px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform border-2 border-pink-300">
                                Search
                            </button>
                        </div>
                    </div>
                    {/* CTA Button */}
                    <a href="#vendors" className="mb-8 inline-block bg-white border border-pink-300 text-emerald-900 font-bold px-8 py-3 rounded-full shadow hover:bg-pink-50 transition font-inter text-lg">Explore Vendors</a>
                    {/* Why ShaadiHub Row */}
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-2">
                        <div className="flex flex-col items-center">
                            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-500 shadow mb-1">
                                <BadgeCheck size={28} color="black" />
                            </span>
                            <span className="font-inter text-red-800 text-sm md:text-base font-semibold">Verified Vendors</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-500 shadow mb-1">
                                <MessageSquare size={28} color="black" />
                            </span>
                            <span className="font-inter text-red-800 text-sm md:text-base font-semibold">Real Reviews</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-500 shadow mb-1">
                                <CalendarCheck size={28} color="black" />
                            </span>
                            <span className="font-inter text-red-800 text-sm md:text-base font-semibold">Easy Booking</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-500 shadow mb-1">
                                <Sparkles size={28} color="black" />
                            </span>
                            <span className="font-inter text-red-800 text-sm md:text-base font-semibold">Local Experts</span>
                        </div>
                    </div>
                </div>
            </header>
            {/* Wavy Divider */}
            <div className="w-full overflow-hidden">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20"><path fill="#f472b6" fillOpacity="0.12" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path></svg>
            </div>
            {/* Popular Categories Section - dark theme */}
            <section className="max-w-5xl mx-auto px-6 py-12 bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl mt-12 border border-pink-300">
                <h2 className="text-3xl font-playfair font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500 bg-clip-text text-transparent shimmer-gold">Popular Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-stretch place-items-center">
                    {categories.map((cat, i) => (
                        <div key={cat.name} className="flex flex-col items-center group w-full">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-500 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                                {cat.icon}
                            </div>
                            <span className="mt-2 text-lg font-inter font-semibold text-red-800 group-hover:text-red-600 transition-colors text-center w-full">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </section>
            {/* Wavy Divider */}
            <div className="w-full overflow-hidden">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20 rotate-180"><path fill="#f472b6" fillOpacity="0.10" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path></svg>
            </div>
            {/* Why Choose Us Section - dark theme */}
            <section className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 rounded-3xl shadow-xl">
                {/* Gold gradient defs for Lucide icons */}
                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="50%" stopColor="#fffbe6" />
                            <stop offset="100%" stopColor="#FFB300" />
                        </linearGradient>
                    </defs>
                </svg>
                <h2 className="text-3xl font-playfair font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500 bg-clip-text text-transparent shimmer-gold">Why Choose ShaadiHub?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="flex flex-col items-center">
                        <BadgeCheck size={40} className="icon-gold mb-4" />
                        <h3 className="font-bold text-lg mb-2 font-playfair text-white">Curated Vendors</h3>
                        <p className="text-gray-200 font-inter">Only the best, verified vendors for your big day. Quality and trust, guaranteed.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users size={40} className="icon-gold mb-4" />
                        <h3 className="font-bold text-lg mb-2 font-playfair text-white">Personalized Support</h3>
                        <p className="text-gray-200 font-inter">Our team is here to help you at every step, from planning to celebration.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Sparkles size={40} className="icon-gold mb-4" />
                        <h3 className="font-bold text-lg mb-2 font-playfair text-white">Unique Experience</h3>
                        <p className="text-gray-200 font-inter">Modern, interactive, and beautiful—just like your wedding should be.</p>
                    </div>
                </div>
            </section>
            {/* Vendor Cards Section - dark theme */}
            <section id="vendors" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-emerald-900 via-black to-zinc-900 rounded-3xl shadow-xl mt-12">
                <h2 className="text-3xl font-playfair font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500 bg-clip-text text-transparent shimmer-gold">
                    Featured Vendors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {vendors.map((vendor, idx) => (
                        <div
                            key={idx}
                            className="relative bg-zinc-900 rounded-3xl shadow-xl hover:shadow-amber-200 transition-shadow duration-300 overflow-hidden group cursor-pointer border border-pink-300 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 animate-fade-in"
                        >
                            {vendor.featured && (
                                <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-400 to-pink-500 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full shadow border border-pink-300 z-20">
                                    Featured
                                </span>
                            )}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-xs font-semibold text-emerald-900 shadow">
                                    {vendor.rating} ★
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-2">
                                <h3 className="text-xl font-playfair font-bold text-white mb-1">
                                    {vendor.name}
                                </h3>
                                <div className="text-gray-300 mb-1 font-inter">{vendor.location}</div>
                                <div className="text-pink-500 font-semibold mb-3 font-inter">
                                    {vendor.price}
                                </div>
                                <button className="w-full bg-white text-emerald-900 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform font-inter border-2 border-pink-300">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <a href="#" className="bg-gradient-to-r from-pink-400 to-pink-500 text-emerald-900 font-bold px-8 py-3 rounded-full shadow hover:scale-105 transition-transform border border-pink-300 font-inter">See All Vendors</a>
                </div>
            </section>
            {/* Testimonials Section */}
            <section id="testimonials" className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-playfair font-bold mb-8 text-center bg-gradient-to-r from-rose-500 via-pink-400 to-red-500 bg-clip-text text-transparent shimmer-gold">What Couples Say</h2>
                <div className="relative bg-gradient-to-br from-rose-100 via-pink-100 to-red-200 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center animate-fade-in">
                    <img src={testimonials[testimonialIdx].image} alt={testimonials[testimonialIdx].name} className="w-20 h-20 rounded-full border-4 border-rose-200 mb-4 object-cover" />
                    <blockquote className="text-xl text-gray-700 font-inter mb-4">“{testimonials[testimonialIdx].quote}”</blockquote>
                    <div className="text-rose-500 font-bold font-playfair">{testimonials[testimonialIdx].name}</div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-rose-300 hover:text-rose-500" onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}>&lt;</div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-rose-300 hover:text-rose-500" onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}>&gt;</div>
                </div>
            </section>
            {/* Call to Action Section */}
            <section className="max-w-3xl mx-auto px-6 py-16 text-center">
                <div className="relative rounded-3xl shadow-xl p-10 flex flex-col items-center animate-fade-in bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 overflow-hidden">
                    {/* Sparkling glitter overlay */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="glitter" cx="50%" cy="50%" r="80%">
                                    <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.7" />
                                    <stop offset="60%" stopColor="#FFD700" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <circle cx="80%" cy="20%" r="80" fill="url(#glitter)">
                                <animate attributeName="r" values="80;100;80" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="30%" cy="70%" r="60" fill="url(#glitter)">
                                <animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="60%" cy="50%" r="40" fill="url(#glitter)">
                                <animate attributeName="r" values="40;60;40" dur="2s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>
                    <h2 className="text-3xl font-playfair font-bold text-white mb-4 z-10">Ready to Plan Your Dream Wedding?</h2>
                    <p className="text-lg text-white/90 mb-6 font-inter z-10">Sign up now to get started, or contact us for a free consultation with our wedding experts.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center z-10">
                        <a href="#" className="bg-white text-emerald-900 font-bold px-8 py-3 rounded-full shadow hover:scale-105 transition-transform border border-pink-300 font-inter">Sign Up</a>
                        <a href="#contact" className="bg-emerald-900 text-white font-bold px-8 py-3 rounded-full shadow hover:scale-105 transition-transform border border-pink-300 font-inter">Contact Us</a>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer id="contact" className="relative z-10 mt-auto">
                <div className="max-w-3xl mx-auto">
                    <div className="rounded-3xl shadow-2xl bg-white/40 backdrop-blur-2xl border border-pink-300 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 8px 0 #FFD700' }}>
                        <div className="flex flex-col gap-3 items-start">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl font-playfair font-bold text-[#800000] drop-shadow">FAQ</span>
                            </div>
                            <div className="flex items-center gap-2 text-lg font-inter text-[#800000]">
                                <svg xmlns='http://www.w3.org/2000/svg' className='inline-block' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>
                                <a href="#faq" className="hover:text-pink-500 transition">Frequently Asked Questions</a>
                            </div>
                            <div className="flex items-center gap-2 text-lg font-inter text-[#800000]">
                                <svg xmlns='http://www.w3.org/2000/svg' className='inline-block' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0H8' /></svg>
                                <span>info@shaadihubkarachi.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-lg font-inter text-[#800000]">
                                <svg xmlns='http://www.w3.org/2000/svg' className='inline-block' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' /></svg>
                                <span>+92 300 1234567</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-end">
                            <a href="https://facebook.com/shaadihubkarachi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-inter text-[#800000] hover:text-pink-500 transition">
                                <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0' /></svg>
                                Facebook
                            </a>
                            <a href="https://instagram.com/shaadihubkarachi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-inter text-[#800000] hover:text-pink-500 transition">
                                <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.333 3.374C2.013 5.741 2 6.151 2 12c0 5.849.013 6.259.072 7.54.059 1.282.353 2.394 1.333 3.374.98.98 2.092 1.274 3.374 1.333C8.259 23.987 8.669 24 12 24s3.741-.013 4.948-.072c1.282-.059 2.394-.353 3.374-1.333.98-.98 1.274-2.092 1.333-3.374.059-1.281.072-1.691.072-7.54 0-5.849-.013-6.259-.072-7.54-.059-1.282-.353-2.394-1.333-3.374-.98-.98-2.092-1.274-3.374-1.333C15.741.013 15.331 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' /></svg>
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Animations & Custom Fonts */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: none; }
                }
                .animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) both; }
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-inter { font-family: 'Inter', sans-serif; }
                .border-gold-200 { border-color: #e6c200; }
                /* Spark gold shimmer effect */
                .shimmer-gold {
                    position: relative;
                    background-size: 200% 100%;
                    animation: shimmer-gold 6s linear infinite;
                }
                @keyframes shimmer-gold {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .icon-gold { stroke: url(#gold-gradient); }
            `}</style>
        </div>
    );
} 
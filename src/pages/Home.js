export default function Home(props) {
    const [testimonialIdx, setTestimonialIdx] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIdx((i) => (i + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col relative overflow-x-hidden">
            {/* Decorative SVGs */}
            <svg className="absolute top-0 left-0 w-64 h-64 opacity-30 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle fill="#fbbf24" cx="100" cy="100" r="100" /></svg>
            <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-20 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle fill="#f472b6" cx="100" cy="100" r="100" /></svg>
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* ... existing main content ... */}
            </main>
            {/* Footer */}
            <footer id="contact" className="relative z-10 mt-auto">
                <div className="rounded-3xl shadow-2xl bg-white/40 backdrop-blur-2xl border border-[#FFD700] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 8px 0 #FFD700' }}>
                    {/* ... existing footer content ... */}
                </div>
            </footer>
        </div>
    );
} 
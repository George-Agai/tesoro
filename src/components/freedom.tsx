import ladiesBg from '../assets/backgroundImages/ladies.webp';

export const Freedom: React.FC = () => {
    return (
        <section className="relative full-container flex flex-col items-center justify-between p-1 py-4 bg-center bg-no-repeat bg-cover overflow-hidden" style={{ backgroundImage: `url(${ladiesBg})` }}>
            <div className="absolute inset-0 backdrop-blur-sm bg-white/10 z-0"></div>

            <div className="relative z-10">
                <p className="text-2xl font-bold text-center md:text-3xl">Send and spend freely—no borders, no barriers, just seamless freedom.</p>
            </div>
            <button className="relative z-10 px-2.5 py-1 mt-2 font-semibold cursor-pointer border border-blue-500 bg-blue-500 text-white rounded-2xl hover:bg-transparent hover:text-blue-600 transition">
                Download App
            </button>
        </section>
    );
};

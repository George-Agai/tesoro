import heroBg from '../assets/backgroundImages/hero-bg.webp';

export const Hero: React.FC = () => (
    <section className="full-container bg-cover bg-center text-center pt-10 pb-12 px-1 bg-purple-200" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="text-5xl md:text-5xl font-bold mb-1 mt-1">
            Send money instantly⚡️
        </h1>
        <p className="text-lg md:text-xl mb-1">
            Fast, secure and low-cost payments wherever you are.
        </p>
        <button className="px-1.5 py-0.5 mt-1 mb-1 font-semibold cursor-pointer border border-blue-500 bg-blue-500 text-white rounded-lg hover:bg-transparent hover:text-blue-600 transition">
            Download App
        </button>
    </section>
);

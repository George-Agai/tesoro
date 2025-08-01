import ladiesBg from '../assets/backgroundImages/ladies.webp';
export const Freedom: React.FC = () => {
    return (
        // <section className="full-container flex items-center justify-between p-1 bg-cover bg-center" style={{ backgroundImage: `url(${ladiesBg})` }}>
        //     <div>
        //         <p className='text-lg font-bold'>Experience true freedom</p>
        //     </div>
        //     <button className="px-1 py-0.5 mt-1 mb-1 font-semibold cursor-pointer border border-blue-500 bg-blue-500 text-white rounded-lg hover:bg-transparent hover:text-blue-600 transition">
        //         Download App
        //     </button>
        // </section>
        <section className="relative full-container flex items-center justify-between p-1 py-3 bg-center bg-no-repeat bg-cover overflow-hidden" style={{ backgroundImage: `url(${ladiesBg})` }}>
            <div className="absolute inset-0 backdrop-blur-xs bg-white/10 z-0"></div>

            <div className="relative z-10">
                <p className="text-lg font-bold">Experience true freedom</p>
            </div>
            <button className="relative z-10 px-1 py-0.5 mt-1 mb-1 font-semibold cursor-pointer border border-blue-500 bg-blue-500 text-white rounded-lg hover:bg-transparent hover:text-blue-600 transition">
                Download App
            </button>
        </section>



    );
};

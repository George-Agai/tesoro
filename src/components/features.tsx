import iconBg from '../assets/backgroundImages/feature-icon-bg.webp';
import globe from '../assets/icons/world.png';
import money from '../assets/icons/money.png';
import hourglass from '../assets/icons/hourglass.png';
import shop from '../assets/icons/shop.png';

interface Feature {
    title: string;
    desc: string;
    icon: string;
}

const features: Feature[] = [
    { title: 'Global Reach🚀', desc: 'Send money across Africa and 50+ countries at lightning speeds', icon: globe },
    { title: 'Low Fees✨', desc: 'Move money across borders without worrying about the costs', icon: money },
    { title: 'Spend locally🤙', desc: 'Pay stablecoins directly to local payment channels seamlessly', icon: shop },
    { title: 'Instant settlement⚡️', desc: 'Send and receive money instantly with the speed of stablecoins', icon: hourglass },
];

export const Features: React.FC = () => (
    <section className="full-container py-4 bg-purple-100 px-1 sm:px-1.5">
        <div className="flex flex-col items-center">
            <p className="border border-orange-300 inline-block px-1 rounded-full bg-orange-200">Features</p>
            <h1 className="text-center text-2xl font-semibold mt-0.5">Why choose us</h1>
            <p className="text-center max-w-2xl mt-1 text-lg text-gray-600">
                Discover a faster, cheaper and smarter way to send and spend money across Africa and beyond.
            </p>
        </div>


        <div className="grid gap-1.5 py-2 grid-cols-1 sm:grid-cols-2 sm:gap-1 md:grid-cols-4 md:gap-1">
            {features.map((f) => (
                <div key={f.title} className="bg-white rounded-lg shadow px-1 py-1">
                    <div className='flex align-center justify-center w-5 mb-0.5 bg-cover' style={{ backgroundImage: `url(${iconBg})` }}>
                        <img src={f.icon} alt='feature-image' className="w-4 h-4" />
                    </div>

                    <h3 className="text-xl font-semibold mb-0.5">{f.title}</h3>
                    <p>{f.desc}</p>
                </div>
            ))}
        </div>
    </section>

);

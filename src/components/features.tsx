import type { ReactNode } from 'react';

interface Feature {
    title: string;
    desc: string;
    icon: ReactNode;
}

const features: Feature[] = [
    { title: 'Global Reach', desc: 'Send to 50+ countries', icon: <span>🌍</span> },
    { title: 'Low Fees', desc: 'As low as 0.5%', icon: <span>💰</span> },
    { title: '24/7 Support', desc: 'We’re always here', icon: <span>📞</span> },
];

export const Features: React.FC = () => (
    <section className="my-container px-1">
        <div className="grid gap-2 py-2 grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4">
            {features.map((f) => (
                <div key={f.title} className="bg-white rounded-lg shadow pl-1 py-1">
                    <div className="text-4xl mb-1">{f.icon}</div>
                    <h3 className="text-xl font-semibold mb-0.5">{f.title}</h3>
                    <p>{f.desc}</p>
                </div>
            ))}
        </div>
    </section>

);

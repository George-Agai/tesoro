import { useState, useEffect } from 'react';

export const Button: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            className={`
        transform transition-transform duration-500 ease-out
        px-2.5 py-1 mt-1 mb-1 font-semibold cursor-pointer
        border border-blue-500 bg-blue-500 text-white rounded-2xl
        hover:bg-transparent hover:text-blue-600 transition
        ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
        >
            Download App
        </button>
    );
};

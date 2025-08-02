import { useState } from 'react';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative my-container flex items-center justify-between p-1">
      {/* Logo */}
      <div className="text-xl font-bold">Tesoro</div>

      {/* Hamburger / Close */}
      <button
        className="md:hidden text-2xl z-20"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Overlay nav on mobile, static on md+ */}
      <nav
        className={`
          absolute top-0 right-0 rounded-lg flex flex-col items-left
          bg-white p-2 pr-4 shadow
          transition-transform duration-200
          ${open ? 'translate-x-0' : 'translate-x-full'}
          md:static md:translate-x-0 md:flex-row md:bg-transparent md:backdrop-blur-0 md:p-0 md:space-y-0 md:flex md:items-center
        `}
      >
        <a href="#features" className="block py-1 px-2 hover:text-blue-600">Features</a>
        <a href="#pricing"  className="block py-1 px-2 hover:text-blue-600">Pricing</a>
        <a href="#contact"  className="block py-1 px-2 hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
};
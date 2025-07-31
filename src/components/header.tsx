import { useState } from 'react';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="my-container flex items-center justify-between p-1">
      <div className="text-xl font-bold">Tesoro</div>
      <nav className={`md:flex gap-6 ${open ? 'block' : 'hidden'}`}>
        <a href="#features" className="block py-1">Features</a>
        <a href="#pricing" className="block py-1">Pricing</a>
        <a href="#contact" className="block py-1">Contact</a>
      </nav>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </header>
  );
};

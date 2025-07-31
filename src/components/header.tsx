import { useState } from 'react';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="container flex items-center justify-between py-4">
      <div className="text-xl font-bold">MiniPay</div>
      <nav className={`md:flex gap-6 ${open ? 'block' : 'hidden'}`}>
        <a href="#features" className="block py-2">Features</a>
        <a href="#pricing" className="block py-2">Pricing</a>
        <a href="#contact" className="block py-2">Contact</a>
      </nav>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </header>
  );
};

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../../config/site';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <button className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg">
      <Menu className="h-6 w-6" />
    </button>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
          <div className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-slate-200 shadow-lg">
            <div className="px-4 py-6 space-y-2">
              {NAVIGATION.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                  {item.name}
                </a>
              ))}
              <a href="/contacto" onClick={() => setOpen(false)} className="block text-center px-6 py-3 mt-4 text-sm font-semibold text-white bg-blue-700 rounded-lg">
                Contáctanos
              </a>
            </div>
            <button type="button" className="absolute top-4 right-4 p-2 text-slate-700 hover:bg-slate-100 rounded-lg" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

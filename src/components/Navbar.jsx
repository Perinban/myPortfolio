import { useEffect, useState } from 'react';
import { navLinks } from "../constants";
import { menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const observers = navLinks.map(({ id }) => {
            const section = document.getElementById(id);
            if (!section) return null;

            const observer = new IntersectionObserver(
                ([entry]) => entry.isIntersecting && setActive(id),
                { rootMargin: '-35% 0px -55% 0px' }
            );
            observer.observe(section);
            return observer;
        }).filter(Boolean);

        return () => observers.forEach((observer) => observer.disconnect());
    }, []);

    const scrollTo = (id) => {
        setOpen(false);
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-primary/90 backdrop-blur-xl">
            <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group text-left"
                    aria-label="Back to top"
                >
                    <span className="block font-display text-[17px] font-bold tracking-[-0.025em] text-secondary transition-colors group-hover:text-accent sm:text-[18px]">
                        Perinban Parameshwaran
                    </span>
                    <span className="mt-0.5 hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-secondary/35 sm:block">
                        Data systems · performance · GPU
                    </span>
                </button>

                <ul className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                type="button"
                                onClick={() => scrollTo(link.id)}
                                className={`text-sm font-medium transition-colors ${active === link.id ? 'text-accent' : 'text-secondary/70 hover:text-secondary'}`}
                            >
                                {link.title}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-tertiary lg:hidden"
                    onClick={() => setOpen((value) => !value)}
                    aria-label="Toggle navigation"
                >
                    <img src={open ? close : menu} alt="" className="h-5 w-5 object-contain" />
                </button>

                {open && (
                    <div className="absolute left-5 right-5 top-[82px] rounded-2xl border border-white/10 bg-tertiary p-3 shadow-2xl sm:left-auto sm:right-8 sm:w-64 lg:hidden">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => scrollTo(link.id)}
                                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${active === link.id ? 'bg-accent/10 text-accent' : 'text-secondary/70 hover:bg-white/5 hover:text-secondary'}`}
                            >
                                {link.title}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from "../constants";
import { menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    };

    useEffect(() => {
        const observers = [];
        navLinks.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (!section) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { threshold: 0.4 }
            );
            observer.observe(section);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const handleNavClick = (id) => {
        setActive(id);
        setToggle(false); // Close the menu when a link is clicked

        // Scroll to the section
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-navbar-glass border-b border-navbar-border backdrop-blur-md`} style={{ perspective: '800px', transform: 'translateZ(0)', boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(88,166,255,0.1)' }}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >

                    <p className="text-secondary text-[18px] font-bold cursor-pointer">
                        Perinban&nbsp;Parameshwaran
                    </p>
                </Link>
                <ul className="list-none hidden lg:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.id
                                    ? "text-accent border-b-2 border-accent"
                                    : "text-secondary"
                            } hover:text-accent text-[18px] font-medium cursor-pointer`}
                            style={{
                                transform: active === link.id ? 'perspective(400px) translateZ(8px)' : 'perspective(400px) translateZ(0)',
                                transition: 'transform 0.25s ease, color 0.25s ease, text-shadow 0.25s ease',
                                textShadow: active === link.id ? '0 0 12px rgba(88,166,255,0.7)' : 'none',
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'perspective(400px) translateZ(8px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = active === link.id ? 'perspective(400px) translateZ(8px)' : 'perspective(400px) translateZ(0)'}
                            onClick={() => handleNavClick(link.id)}
                        >
                            <a href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="lg:hidden flex items-center relative">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={handleToggle}
                    />
                    <div
                        className={`${
                            toggle ? 'flex' : 'hidden'
                        } flex-col p-6 bg-auxiliary text-secondary absolute top-16 right-0 mx-4 my-2 min-w-[200px] max-w-[90%] z-30 rounded-xl transition-transform transform ${
                            toggle ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                        }`}
                    >
                        <ul className="list-none flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.id
                                            ? "bg-primary text-accent"
                                            : "text-secondary hover:text-accent hover:bg-auxiliary"
                                    } text-[16px] font-medium cursor-pointer p-2 rounded-lg transition-colors`}
                                    onClick={() => handleNavClick(link.id)}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
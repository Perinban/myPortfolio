import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from "../constants";
import { logo, menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    };

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
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-auxiliary border-b border-secondary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[40px] h-[40px] object-contain"
                    />
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
                        } flex-col p-6 bg-supplementary text-secondary absolute top-16 right-0 mx-4 my-2 min-w-[200px] max-w-[90%] z-30 rounded-xl transition-transform transform ${
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

import React from 'react';
import { motion } from 'framer-motion';
import { flipIn } from "../../utils/motion";

const Buttons = ({ categories, filterProjects, selectedCategory }) => {
    return (
        <div
            className="flex flex-wrap gap-4 mb-10"
        >
            <motion.button
                variants={flipIn('up', 0, 0.5)}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => filterProjects('All')}
                className={`py-2 px-6 rounded-lg transition-all duration-300 ${
                    selectedCategory === 'All'
                        ? 'bg-gradient-to-r from-[#A67B5B] to-[#8B5E3C] text-secondary'
                        : 'bg-[#E8E8E8] text-accent hover:bg-gradient-to-r hover:from-[#D1B78C] hover:to-[#C1A79E]'
                }`}
            >
                All
            </motion.button>
            {categories.map((category, index) => (
                <motion.button
                    key={index}
                    variants={flipIn('up', index * 0.1, 0.5)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => filterProjects(category)}
                    className={`py-2 px-6 rounded-lg transition-all duration-300 ${
                        selectedCategory === category
                            ? 'bg-gradient-to-r from-[#A67B5B] to-[#8B5E3C] text-secondary'
                            : 'bg-[#E8E8E8] text-accent hover:bg-gradient-to-r hover:from-[#D1B78C] hover:to-[#C1A79E]'
                    }`}
                >
                    {category}
                </motion.button>
            ))}
        </div>
    );
};

export default Buttons;

import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { professional_technologies } from '../constants';
import { flipIn, textVariant } from "../utils/motion";
import { styles } from "../styles.js";

const Tech = ({ onLoad }) => {
    useEffect(() => {
        const t = setTimeout(() => { if (onLoad) onLoad(); }, 500);
        return () => clearTimeout(t);
    }, [onLoad]);

    const TiltIcon = ({ technology }) => {
        const ref = useRef();
        const [tilt, setTilt] = useState({ x: 0, y: 0 });

        const handleMouseMove = (e) => {
            const rect = ref.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2);
            const dy = (e.clientY - cy) / (rect.height / 2);
            setTilt({ x: dy * -20, y: dx * 20 });
        };

        const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

        return (
            <div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="flex flex-col items-center cursor-pointer w-24 sm:w-28 md:w-32 lg:w-36"
                style={{ perspective: '600px' }}
            >
                <motion.div
                    animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: tilt.x !== 0 ? 1.15 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center p-3"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-full h-full object-contain"
                        style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))' }}
                    />
                </motion.div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-secondary text-center w-full">{technology.name}</p>
            </div>
        );
    };



    return (
        <>
            <motion.div variants={textVariant()} initial="hidden" animate="show" className="text-center mb-10">
                <p className={`${styles.sectionSubText} text-supplementary`}>What I work with</p>
                <h2 className={`${styles.sectionHeadText} text-secondary`}>Professional technologies.</h2>
            </motion.div>
            <motion.div
                variants={flipIn('right', 0, 1)}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10"
            >
                {professional_technologies.map((technology, index) => (
                    <motion.div
                        key={technology.name}
                        variants={flipIn('up', 0.1 * index, 0.6)}
                        initial="hidden"
                        animate="show"
                    >
                        <TiltIcon technology={technology} />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Tech, "");
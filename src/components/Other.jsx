import React, { useCallback, lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { other_technologies } from '../constants';
import { flipIn, textVariant } from "../utils/motion";
import { styles } from "../styles.js";

const CoinCanvas = lazy(() => import('./canvas/Coin'));

const Other = () => {

    const renderTechnology = useCallback((technology, index) => (
        <motion.div
            key={technology.name}
            variants={flipIn('up', 0.5 * index, 1)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <Suspense fallback={<div>Loading Canvas...</div>}>
                    <CoinCanvas icon={technology.icon} />
                </Suspense>
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-secondary text-center">{technology.name}</p>
        </motion.div>
    ), []);

    return (
        <>
            <motion.div
                variants={textVariant()}
                initial="hidden"
                animate="show"
                className="text-center -my-16 py-0 mb-10"
            >
                <h2 className={`${styles.sectionHeadText} text-accent`}>Other technologies.</h2>
            </motion.div>
            <motion.div
                variants={flipIn('left', 0, 1)}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10"
            >
                {other_technologies.map(renderTechnology)}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Other, "");

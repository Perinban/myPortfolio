import { motion } from "framer-motion";
import { styles } from '../styles';
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
    return function Section(props) {
        return (
            <motion.section
                id={idName || undefined}
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.08 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0 scroll-mt-20`}
            >
                <Component {...props} />
            </motion.section>
        );
    };
};

export default SectionWrapper;

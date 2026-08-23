import { motion } from 'framer-motion';
import { styles } from '../styles';
import { focus_areas } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const FocusCard = ({ symbol, title, description, index }) => (
    <motion.article
        variants={fadeIn("up", "spring", 0.08 * index, 0.55)}
        className="h-full rounded-2xl border border-white/10 bg-tertiary p-5 transition-colors hover:border-accent/25"
    >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-xs font-black tracking-wide text-accent">
            {symbol}
        </div>
        <h3 className="mt-5 text-lg font-bold text-secondary">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-secondary/70">{description}</p>
    </motion.article>
);

const About = () => (
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-accent`}>Professional profile</p>
                <h2 className={`${styles.sectionHeadText} mt-3 text-secondary`}>About.</h2>
            </motion.div>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-secondary/70 sm:text-[16px] sm:leading-8">
                <p>
                    I am a Data Engineer with 6+ years of professional experience building enterprise ETL and data-integration systems, with Ab Initio at the core of my engineering background.
                </p>
                <p>
                    My career has covered production pipelines, regulatory reporting, payroll and HR integrations, data quality, automation, performance tuning, and operational support. After moving to Germany, I completed an M.Sc. in Data Science and worked at UFZ on scientific data and machine-learning pipelines before returning to Ab Initio engineering at Entual GmbH.
                </p>
                <p>
                    Outside day-to-day data engineering, I build systems-focused software including MetaXuda and Clounar and maintain AXON work on llama.cpp. I am particularly interested in runtime behavior, memory, performance, GPU computing, and resource-efficient AI infrastructure.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {focus_areas.map((area, index) => (
                <FocusCard key={area.title} {...area} index={index} />
            ))}
        </div>
    </div>
);

export default SectionWrapper(About, "about");

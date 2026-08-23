import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { technology_groups } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles.js";

const ComputeCanvas = lazy(() => import('./canvas/Compute'));

const Tech = () => (
    <>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className={`${styles.sectionSubText} text-supplementary`}>Technology landscape</p>
                <h2 className={`${styles.sectionHeadText} text-secondary`}>What I work with.</h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-7 text-secondary/70 sm:text-[16px] sm:leading-8">
                    My professional foundation is enterprise data engineering. The same focus on data flow, reliability, execution, and performance now extends into distributed systems, systems programming, GPU compute, and AI runtimes.
                </p>
                <p className="mt-4 text-sm leading-6 text-secondary/50">
                    The interactive compute model represents the layers I increasingly work across: data, runtime, memory, and hardware.
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn("up", "spring", 0.1, 0.65)}
                initial="hidden"
                animate="show"
                className="relative overflow-hidden"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.08),transparent_58%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
                <Suspense fallback={<div className="h-[280px] sm:h-[320px] lg:h-[340px]" />}>
                    <ComputeCanvas />
                </Suspense>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary to-transparent" />
            </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technology_groups.map((group, index) => (
                <motion.div
                    key={group.title}
                    variants={fadeIn("up", "spring", 0.06 * index, 0.55)}
                    initial="hidden"
                    animate="show"
                    className="h-full rounded-2xl border border-white/10 bg-tertiary/90 p-5 backdrop-blur-sm sm:p-6"
                >
                    <h3 className="text-[17px] font-bold text-accent">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {group.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-lg border border-white/10 bg-primary/70 px-2.5 py-1.5 text-xs font-medium text-secondary/70"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </>
);

export default SectionWrapper(Tech, "technology");

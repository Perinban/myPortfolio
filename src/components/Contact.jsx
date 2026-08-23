import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const EarthCanvas = lazy(() => import('./canvas/Earth'));

const Contact = () => (
    <>
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className={`${styles.sectionSubText} text-supplementary`}>Let’s connect</p>
            <h2 className={`${styles.sectionHeadText} text-secondary`}>Contact.</h2>
        </motion.div>

        <div className="mt-9 grid items-center gap-9 border-t border-white/10 pt-10 md:grid-cols-[1.04fr_0.96fr] md:gap-10 lg:gap-16">
            <motion.div
                variants={fadeIn("up", "spring", 0.04, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-2xl"
            >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Berlin, Germany</p>
                <h3 className="mt-4 max-w-xl font-display text-[28px] font-bold leading-[1.08] tracking-[-0.035em] text-secondary sm:text-[36px]">
                    Data systems, runtimes, GPU computing, and practical AI infrastructure.
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-secondary/68 sm:text-[16px] sm:leading-8">
                    I’m happy to connect about data engineering, Ab Initio, distributed systems, performance work, GPU computing, or the systems projects shown here.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                        href="mailto:p.perinban@gmail.com"
                        className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
                    >
                        Email me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/perinban-parameshwaran/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl border border-white/10 bg-tertiary/65 px-4 py-3 text-sm font-semibold text-secondary/75 transition-colors hover:border-accent/35 hover:text-accent"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        href="https://github.com/Perinban"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl border border-white/10 bg-tertiary/65 px-4 py-3 text-sm font-semibold text-secondary/75 transition-colors hover:border-accent/35 hover:text-accent"
                    >
                        GitHub ↗
                    </a>
                </div>
            </motion.div>

            <motion.div
                variants={fadeIn("up", "spring", 0.08, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="relative h-[280px] w-full max-w-[560px] overflow-hidden sm:h-[320px] md:ml-auto lg:h-[360px]"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_46%,rgba(88,166,255,0.09),transparent_46%),radial-gradient(circle_at_38%_62%,rgba(167,139,250,0.07),transparent_52%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.016)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.016)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
                <Suspense fallback={<div className="h-full w-full" />}>
                    <EarthCanvas />
                </Suspense>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary via-primary/75 to-transparent" />
                <div className="pointer-events-none absolute bottom-5 right-4 text-right sm:right-6">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary/40">Based in</div>
                    <div className="mt-1 font-display text-base font-bold text-secondary sm:text-lg">Berlin · Germany</div>
                </div>
            </motion.div>
        </div>
    </>
);

export default SectionWrapper(Contact, "contact");

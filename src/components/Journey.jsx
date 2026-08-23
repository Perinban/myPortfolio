import { motion } from "framer-motion";
import { styles } from '../styles';
import { journeys } from "../constants";
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const Logo = ({ journey }) => (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        {journey.icon ? (
            <img src={journey.icon} alt="" className="h-8 w-8 object-contain" />
        ) : (
            <span className="px-1 text-center text-[10px] font-black text-primary">{journey.initials}</span>
        )}
    </div>
);

const JourneyCard = ({ journey, index }) => {
    const fromLeft = index % 2 === 0;

    return (
        <motion.article
            initial={{ opacity: 0, x: fromLeft ? -42 : 42, y: 18 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.48, delay: Math.min(index * 0.04, 0.18), ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full max-w-[940px] ${fromLeft ? 'xl:mr-auto' : 'xl:ml-auto'}`}
        >
            <div className="absolute left-0 top-8 hidden h-px w-10 bg-gradient-to-r from-accent/60 to-transparent lg:block" />
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-tertiary/88 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-7 lg:p-7">
                    <div className="flex items-start gap-4 lg:block">
                        <Logo journey={journey} />
                        <div className="min-w-0 lg:mt-5">
                            <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                                {journey.type}
                            </span>
                            <p className="mt-2 text-xs font-semibold leading-5 text-secondary/48 lg:mt-3">{journey.date}</p>
                        </div>
                    </div>

                    <div className="min-w-0">
                        <h3 className="max-w-2xl font-display text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-secondary sm:text-[28px]">
                            {journey.title}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-accent/90 sm:text-[15px]">{journey.name}</p>

                        {journey.points.length > 0 && (
                            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                                {journey.points.map((point, pointIndex) => (
                                    <div
                                        key={pointIndex}
                                        className="rounded-xl border border-white/[0.07] bg-primary/45 px-3.5 py-3 text-[13px] font-medium leading-5 text-secondary/68"
                                    >
                                        <span className="mr-2 text-accent/80">0{pointIndex + 1}</span>
                                        {point}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

const Journey = () => (
    <>
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl">
            <p className={`${styles.sectionSubText} text-accent`}>Career and education</p>
            <h2 className={`${styles.sectionHeadText} mt-3 text-secondary`}>Journey.</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-secondary/66 sm:text-[16px] sm:leading-8">
                From enterprise data engineering to research, systems work, GPU computing, and AI infrastructure.
            </p>
        </motion.div>

        <div className="relative mt-9 space-y-5 overflow-x-clip py-1 sm:mt-10 sm:space-y-6">
            <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-accent/0 via-accent/12 to-accent/0 lg:block" aria-hidden="true" />
            {journeys.map((journey, index) => (
                <JourneyCard key={`${journey.name}-${journey.date}`} journey={journey} index={index} />
            ))}
        </div>
    </>
);

export default SectionWrapper(Journey, "journey");

import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles.js";
import { engineering_updates } from "../constants";

const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
    </svg>
);

const UpdateCard = ({ update, index }) => (
    <motion.a
        variants={fadeIn("up", "spring", Math.min(0.06 * index, 0.18), 0.48)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        href={update.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full min-h-[270px] flex-col rounded-2xl border border-white/10 bg-tertiary/82 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#0A66C2]/45 sm:p-6"
    >
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary/55">
                <LinkedInIcon />
                LinkedIn note
            </div>
            <span className="text-xs font-semibold text-secondary/30">0{index + 1}</span>
        </div>

        <div className="mt-8 flex flex-1 flex-col">
            <span className="w-fit rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-accent">
                {update.contribution}
            </span>
            <h3 className="mt-4 text-xl font-bold leading-snug text-secondary transition-colors group-hover:text-accent">
                {update.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-secondary/68">
                {update.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {update.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-md bg-primary/70 px-2 py-1 text-[11px] font-medium text-secondary/55">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-[#58a6ff] transition-colors group-hover:text-accent">
            Read the post <span aria-hidden="true">↗</span>
        </div>
    </motion.a>
);

const LinkedIn = () => (
    <>
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className={`${styles.sectionSubText} text-accent`}>Notes from the work</p>
            <h2 className={`${styles.sectionHeadText} mt-3 text-secondary`}>Selected engineering posts.</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-secondary/70 sm:text-[16px] sm:leading-8">
                Short write-ups that add context behind the engineering work — why I built it, what I researched, and what I learned while working through the problem.
            </p>
        </motion.div>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {engineering_updates.map((update, index) => (
                <UpdateCard key={update.title} update={update} index={index} />
            ))}
        </div>
    </>
);

export default SectionWrapper(LinkedIn, "linkedin");

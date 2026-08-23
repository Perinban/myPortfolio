import { motion } from "framer-motion";
import { styles } from "../styles";
import { profileImage } from "../assets";
import { brandColors } from "../constants";
import { fadeIn } from "../utils/motion";

const SocialButton = ({ href, label, children }) => (
    <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={label}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-tertiary transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent/40"
    >
        {children}
    </a>
);

const Hero = () => (
    <section id="top" className="relative overflow-hidden border-b border-white/5 pt-[72px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(167,139,250,0.12),transparent_32%),radial-gradient(circle_at_82%_25%,rgba(56,189,248,0.08),transparent_26%)]" />

        <div className={`${styles.paddingX} relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-7 py-6 sm:py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.72fr)] lg:gap-12 lg:py-10 xl:py-12`}>
            <motion.div initial="hidden" animate="show" variants={fadeIn("right", "tween", 0.05, 0.55)} className="max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
                    Data Engineer · Berlin, Germany
                </p>

                <h1 className={`${styles.heroHeadText} text-secondary`}>
                    Perinban <span className="text-accent">Parameshwaran</span>
                </h1>

                <p className={`${styles.heroSubText} mt-4 max-w-2xl text-secondary/90`}>
                    Data engineering, distributed systems, performance engineering, and GPU / AI infrastructure.
                </p>

                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-secondary/70 sm:text-[16px] sm:leading-7">
                    I have 6+ years of professional experience building production data systems, with Ab Initio at the core of my engineering background. My recent work extends into Rust/C++, runtime behavior, GPU computing, and resource-efficient AI systems.
                </p>

                <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                        ["6+ years", "Data engineering"],
                        ["M.Sc.", "Data Science"],
                        ["Current", "Entual GmbH"],
                    ].map(([value, label]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-tertiary/80 px-4 py-3">
                            <div className="text-lg font-bold text-secondary">{value}</div>
                            <div className="mt-1 text-xs text-secondary/60">{label}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href="#projects" className="rounded-xl bg-accent px-5 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5">
                        View projects
                    </a>
                    <a href="#contact" className="rounded-xl border border-white/10 bg-tertiary px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:border-accent/40 hover:text-accent">
                        Contact
                    </a>

                    <div className="ml-0 flex gap-2 sm:ml-2">
                        <SocialButton href="https://www.linkedin.com/in/perinban-parameshwaran/" label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill={brandColors.linkedin}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
                        </SocialButton>
                        <SocialButton href="https://github.com/Perinban" label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 7.58c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                        </SocialButton>
                        <SocialButton href="mailto:p.perinban@gmail.com" label="Email">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={brandColors.gmail} strokeWidth="2"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
                        </SocialButton>
                    </div>
                </div>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeIn("left", "tween", 0.12, 0.6)} className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] lg:mx-0 lg:max-w-[340px] lg:justify-self-end xl:max-w-[360px]">
                <div className="absolute -inset-6 rounded-[40px] bg-accent/10 blur-3xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] border border-white/10 bg-tertiary shadow-2xl">
                    <img src={profileImage} alt="Perinban Parameshwaran" className="h-full w-full object-cover object-center" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/60 to-transparent p-6 pt-20">
                        <p className="text-sm font-semibold text-secondary">Data Engineer · Systems & Performance</p>
                        <p className="mt-1 text-xs text-secondary/60">Berlin, Germany</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Hero;

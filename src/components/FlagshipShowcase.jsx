import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion';
import { projects } from '../constants';

const FlagshipVisual = lazy(() => import('./canvas/FlagshipVisual'));

const flagshipNames = new Set(['MetaXuda', 'Clounar', 'llama.cpp / AXON']);
const flagships = projects.filter((project) => flagshipNames.has(project.name));

const visualMeta = {
    MetaXuda: {
        variant: 'metaxuda',
        eyebrow: 'Compatibility runtime',
        primary: 'CUDA-style execution',
        secondary: 'Metal on Apple Silicon',
        footer: 'Runtime translation · GPU execution · memory semantics',
    },
    Clounar: {
        variant: 'clounar',
        eyebrow: 'Local AI tooling',
        primary: 'Remote model reasoning',
        secondary: 'Deterministic local tools',
        footer: 'Rust bridge · local shell/file/Git · controlled execution',
    },
    'llama.cpp / AXON': {
        variant: 'axon',
        eyebrow: 'Inference runtime work',
        primary: 'Persistent KV state',
        secondary: 'mmap · Vulkan · zero-copy',
        footer: 'Memory lifecycle · prompt cache · server/runtime extensions',
    },
};

const FlagshipShowcase = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.16, 0.5, 0.84, 1], [0.94, 1, 0.97, 1.015, 0.95]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [4, -1.5, 4]);
    const rotateY = useTransform(scrollYProgress, [0, 0.34, 0.67, 1], [-5, 2.5, -3, 5]);
    const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [20, -6, -24]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.22, 0.5, 0.25]);

    useEffect(() => {
        let frame = null;

        const updateActiveProject = () => {
            frame = null;
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const stickyTop = 72;
            const scrollableDistance = Math.max(section.offsetHeight - viewportHeight, 1);
            const consumedDistance = Math.min(
                Math.max(stickyTop - rect.top, 0),
                scrollableDistance
            );
            const stageDistance = Math.min(Math.max(viewportHeight * 0.36, 260), 380);
            const nextIndex = Math.min(
                Math.floor(consumedDistance / stageDistance),
                flagships.length - 1
            );

            setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
        };

        const onScroll = () => {
            if (frame !== null) return;
            frame = window.requestAnimationFrame(updateActiveProject);
        };

        updateActiveProject();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    const project = flagships[activeIndex] ?? flagships[0];
    const visual = visualMeta[project.name];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative h-[215svh] border-y border-white/5 bg-primary"
            aria-label="Flagship engineering projects"
        >
            <div className="sticky top-[72px] h-[calc(100svh-72px)] min-h-[560px] overflow-hidden">
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ opacity: reduceMotion ? 0.35 : glowOpacity }}
                >
                    <div className="absolute left-1/2 top-1/2 h-[78vw] w-[78vw] max-h-[720px] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[110px] sm:h-[52vw] sm:w-[52vw]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_44%,rgba(88,166,255,0.08),transparent_34%),radial-gradient(circle_at_42%_54%,rgba(167,139,250,0.08),transparent_42%)]" />
                </motion.div>

                <div className="relative mx-auto grid h-full max-w-6xl items-center gap-7 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-10 lg:py-10">
                    <div className="relative z-20 flex min-h-[290px] flex-col justify-center lg:min-h-0">
                        <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent sm:text-xs">
                            <span>Flagship engineering</span>
                            <span className="h-px w-8 bg-accent/40" />
                            <span>0{activeIndex + 1}/03</span>
                        </div>

                        <motion.div
                            key={project.name}
                            initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-5"
                        >
                            <h2 className="max-w-[620px] font-display text-[38px] font-bold leading-[0.98] tracking-[-0.045em] text-secondary sm:text-[50px] lg:text-[61px]">
                                {project.name}
                            </h2>
                            <p className="mt-5 max-w-xl text-[15px] leading-7 text-secondary/70 sm:text-[16px] sm:leading-8">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.slice(0, 5).map((tag) => (
                                    <span key={tag.name} className="rounded-lg border border-white/10 bg-tertiary/75 px-2.5 py-1.5 text-xs font-medium text-secondary/65 backdrop-blur">
                                        {tag.name}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
                            >
                                Explore repository <span aria-hidden="true">↗</span>
                            </a>
                        </motion.div>

                        <div className="mt-7 flex items-center gap-3" aria-label="Scroll progress through flagship projects">
                            {flagships.map((item, index) => (
                                <span
                                    key={item.name}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-accent' : 'w-3 bg-white/20'}`}
                                />
                            ))}
                            <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary/40">scroll</span>
                        </div>
                    </div>

                    <div className="relative flex min-h-[250px] items-center justify-center sm:min-h-[320px] lg:h-[70vh] lg:max-h-[680px] lg:min-h-[500px]" style={{ perspective: '1400px' }}>
                        <div className="absolute h-[70%] w-[76%] rounded-[36px] border border-accent/10 bg-accent/[0.025] [transform:translate3d(36px,24px,-100px)_rotateY(-5deg)]" />
                        <div className="absolute h-[80%] w-[84%] rounded-[36px] border border-white/5 bg-tertiary/25 [transform:translate3d(18px,12px,-48px)_rotateY(-2deg)]" />

                        <motion.div
                            className="relative z-10 h-[250px] w-full max-w-[720px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1018]/95 shadow-[0_45px_120px_rgba(0,0,0,0.42)] sm:h-[320px] lg:h-[470px]"
                            style={{
                                scale: reduceMotion ? 1 : scale,
                                rotateX: reduceMotion ? 0 : rotateX,
                                rotateY: reduceMotion ? 0 : rotateY,
                                y: reduceMotion ? 0 : translateY,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

                            <Suspense fallback={<div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.12),transparent_50%)]" />}>
                                <FlagshipVisual variant={visual.variant} />
                            </Suspense>

                            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 bg-primary/45 px-4 py-3 backdrop-blur-md sm:px-5">
                                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">{visual.eyebrow}</span>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary/35">live system view</span>
                            </div>

                            <motion.div
                                key={`${project.name}-visual-copy`}
                                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.28 }}
                                className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-white/10 bg-gradient-to-t from-primary via-primary/90 to-primary/55 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5"
                            >
                                <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
                                    <div className="font-display text-sm font-semibold text-secondary sm:text-base">{visual.primary}</div>
                                    <div className="text-xs text-secondary/60 sm:text-right sm:text-sm">{visual.secondary}</div>
                                </div>
                                <div className="mt-2 text-[10px] uppercase tracking-[0.12em] text-secondary/35 sm:text-[11px]">{visual.footer}</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlagshipShowcase;

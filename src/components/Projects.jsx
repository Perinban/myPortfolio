import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectVisual from './ProjectVisual';

const flagshipNames = new Set(['MetaXuda', 'Clounar', 'llama.cpp / AXON']);
const libraryProjects = projects.filter((project) => !flagshipNames.has(project.name));

const filters = [
    { label: 'All', match: () => true },
    { label: 'Data & Apps', match: (project) => project.name === 'TalentBliss' || project.category.includes('Full-stack Engineering') || project.category.includes('Data Engineering') },
    { label: 'ML & Analytics', match: (project) => project.category.includes('Machine Learning') || project.category.includes('Data Analysis') || project.category.includes('Data Visualisation') || project.category.includes('NLP') },
];

const ProjectCard = ({ project, index }) => (
    <motion.article
        variants={fadeIn("up", "spring", Math.min(index * 0.05, 0.24), 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-tertiary/90 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/30"
    >
        <div className="relative overflow-hidden border-b border-white/10 bg-primary">
            <ProjectVisual projectName={project.name} />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-xl font-bold text-secondary">{project.name}</h3>
            <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-secondary/70">{project.description}</p>
            {project.status_note && (
                <p className="mt-3 inline-flex w-fit rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-200">
                    {project.status_note}
                </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag.name} className="rounded-md bg-primary/80 px-2 py-1 text-[11px] font-medium text-secondary/60">
                        #{tag.name}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-secondary">
                    GitHub ↗
                </a>
                {project.demo_link && (
                    <>
                        <span className="text-secondary/20">·</span>
                        <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary/70 transition-colors hover:text-accent">
                            Demo ↗
                        </a>
                    </>
                )}
            </div>
        </div>
    </motion.article>
);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filteredProjects = useMemo(() => {
        const selected = filters.find((filter) => filter.label === activeFilter) || filters[0];
        return libraryProjects.filter(selected.match);
    }, [activeFilter]);

    return (
        <>
            <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <p className={`${styles.sectionSubText} text-supplementary`}>More selected work</p>
                <h2 className={`${styles.sectionHeadText} text-secondary`}>Project library.</h2>
                <p className="mt-4 max-w-3xl text-[15px] leading-7 text-secondary/70 sm:text-[16px] sm:leading-8">
                    Supporting work across data engineering, full-stack systems, machine learning, and analytics.
                </p>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Project filters">
                {filters.map((filter) => (
                    <button
                        key={filter.label}
                        type="button"
                        onClick={() => setActiveFilter(filter.label)}
                        className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${activeFilter === filter.label ? 'border-accent bg-accent text-primary' : 'border-white/10 bg-tertiary/80 text-secondary/70 hover:border-accent/40 hover:text-secondary'}`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:[&>*]:col-span-2 lg:[&>*:nth-child(4)]:col-start-2">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "project-library");

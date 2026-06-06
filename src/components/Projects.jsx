import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Buttons } from './canvas';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            initial="hidden"
            animate="show"
        >
            <Tilt
                options={{
                    max: 25,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[600px] flex flex-col"
            >
                <div className="relative w-full h-full">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="w-10 h-10 rounded-full bg-github flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 7.58c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                            </svg>
                        </div>
                        <div
                            onClick={() => window.open(demo_link, "_blank")}
                            className="w-10 h-10 rounded-full bg-github flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-5 h-full">
                    <div className="flex flex-col flex-grow">
                        <h3 className="text-secondary font-bold text-[24px]">{name}</h3>
                        <p className="mt-2 text-secondary text-[14px]">{description}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <p key={index} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
}

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = Array.from(new Set(projects.flatMap((project) => project.category.split(', ').map(category => category.trim()))));

    const filterProjects = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) =>
                project.category.split(', ').includes(category)
            );
            setFilteredProjects(filtered);
        }
    };

    return (
        <>
            <motion.div
                variants={textVariant()}
                className="-my-5"
                initial="hidden"
                animate="show"
            >
                <p className={`${styles.sectionSubText} text-secondary`}>My Projects</p>
                <h2 className={`${styles.sectionHeadText} text-accent`}>Projects.</h2> <br />
            </motion.div>

            <div className="w-full h-full">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    initial="hidden"
                    animate="show"
                    className="mt-3 mb-10 font-semibold text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
                >
                    The following projects highlight my skills and experience through practical examples of my work. Each project includes a brief description, along with links to code repositories and live demos. They demonstrate my ability to tackle complex problems, work with various technologies, and manage projects effectively.
                </motion.p>
            </div>

            <Buttons
                categories={categories}
                filterProjects={filterProjects}
                selectedCategory={selectedCategory}
            />

            <div className="mt-10 flex flex-wrap gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(Projects, "projects");
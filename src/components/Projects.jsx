import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { demo, github } from "../assets";
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
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github}
                                alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                        <div
                            onClick={() => window.open(demo_link, "_blank")}
                            className="-m-1 pl-1 w-12 h-12 flex rounded-full justify-center items-center cursor-pointer"
                        >
                            <img
                                src={demo}
                                alt="demo"
                                className="w-full h-full scale-150 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-5 h-full">
                    <div className="flex flex-col flex-grow">
                        <h3 className="text-white font-bold text-[24px]">{name}</h3>
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

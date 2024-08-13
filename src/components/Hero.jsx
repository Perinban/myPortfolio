import { motion } from "framer-motion";
import { styles } from "../styles";
import { Typewriter } from 'react-simple-typewriter';
import { linkedin, email, github, profileImage } from '../assets';
import { titles } from "../constants";
import { ResumeCanvas } from './canvas';
import { fadeIn, zoomIn, slideIn } from '../utils/motion';

const Hero = () => {
    return (
        <section
            className={`${styles.paddingX} relative w-full min-h-screen pt-32 lg:pt-48 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between bg-primary`}
        >
            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-5 lg:gap-10'
            >
                <div className='flex flex-col gap-3 lg:gap-5'>
                    <motion.h1
                        variants={fadeIn('left', 'tween', 0.4, 1)}
                        className={`${styles.heroHeadText} text-secondary`}
                    >
                        Hi, I am&nbsp;
                        <span className="text-accent">
                            Perinban Parameshwaran.
                        </span>
                    </motion.h1>
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.6, 1)}
                        className='flex flex-col lg:flex-row gap-5 lg:gap-7 items-center'
                    >
                        <ResumeCanvas />
                        <div className='flex gap-5'>
                            <motion.a
                                href='https://www.linkedin.com/in/perinban-parameshwaran-20a7b662/'
                                target='__blank'
                                variants={fadeIn('left', 'tween', 0.8, 1)}
                            >
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    className='w-7 md:w-10 hover:scale-105 transition-transform duration-300'
                                />
                            </motion.a>
                            <motion.a
                                href='https://github.com/Perinban'
                                target='__blank'
                                variants={fadeIn('left', 'tween', 1, 1)}
                            >
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="w-7 md:w-10 hover:scale-105 transition-transform duration-300"
                                />
                            </motion.a>
                            <motion.a
                                href='mailto:perinban.parameshwaran@ue-germany.de'
                                target='__blank'
                                variants={fadeIn('left', 'tween', 1.2, 1)}
                            >
                                <img
                                    src={email}
                                    alt="Email"
                                    className='w-7 md:w-10 hover:scale-105 transition-transform duration-300'
                                />
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.p
                        variants={fadeIn('left', 'tween', 1.4, 1)}
                        className={`${styles.heroSubText} mt-2 text-secondary`}
                    >
                        I am an&nbsp;
                        <span className='text-accent'>
                            <Typewriter
                                words={titles.map(title => title.trim())}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={60}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={zoomIn(0.4, 1)}
                    className="flex flex-grow items-center justify-center mt-10 lg:mt-0 relative z-10"
                >
                    <motion.div
                        className="w-60 md:w-80 h-60 md:h-80 border-4 border-supplementary bg-supplementary flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="show"
                variants={slideIn('up', 'tween', 0.2, 1)}
                className="hidden lg:flex absolute bottom-10 lg:bottom-20 w-full justify-center items-center"
            >
                <a href="#about">
                    <div
                        className="w-12 h-20 rounded-full border-4 border-tertiary bg-auxiliary flex justify-center items-center p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <motion.div
                            animate={{y: [-10, 10, -10]}}
                            transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
                            className="w-4 h-4 rounded-full bg-secondary shadow-md"
                        />
                    </div>
                </a>
            </motion.div>
        </section>
    );
}

export default Hero;

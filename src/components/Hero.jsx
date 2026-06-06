import { motion } from "framer-motion";
import { styles } from "../styles";
import { Typewriter } from "react-simple-typewriter";
import { profileImage } from "../assets";
import { titles, brandColors } from "../constants";
import { ResumeCanvas } from "./canvas";
import { fadeIn, slideIn } from "../utils/motion";

const fadeInLeft02 = fadeIn("left", "tween", 0.1, 0.5);
const fadeInLeft04 = fadeIn("left", "tween", 0.2, 0.5);
const fadeInLeft06 = fadeIn("left", "tween", 0.3, 0.5);
const fadeInLeft08 = fadeIn("left", "tween", 0.4, 0.5);
const fadeInLeft1 = fadeIn("left", "tween", 0.5, 0.5);
const fadeInLeft12 = fadeIn("left", "tween", 0.6, 0.5);
const fadeInLeft14 = fadeIn("left", "tween", 0.7, 0.5);

const slideInUp02 = slideIn("up", "tween", 0.1, 0.5);

const trimmedTitles = titles.map((t) => t.trim());

const Hero = () => {
    const { paddingX, heroHeadText, heroSubText } = styles;

    return (
        <section
            className={`${paddingX} relative w-full min-h-screen pt-32 lg:pt-48 flex flex-col lg:flex-row justify-between items-start bg-primary`}
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${profileImage})`,
                    backgroundSize: "110%",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                    transform: "scaleX(-1)",
                }}
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInLeft02}
                className="z-10 flex flex-col lg:flex-row lg:justify-between items-start gap-5 lg:gap-10 max-w-7xl mx-auto w-full"
            >
                <div className="flex flex-col gap-3 lg:gap-5 items-start text-left max-w-2xl w-full">
                    <motion.h2
                        variants={fadeInLeft04}
                        className={`${heroHeadText} text-secondary leading-tight break-words max-w-2xl text-left`}
                    >
                        Hi, I am&nbsp;
                        <span className="text-accent font-black">Perinban Parameshwaran.</span>
                    </motion.h2>

                    <motion.div
                        variants={fadeInLeft06}
                        className="flex flex-col lg:flex-row gap-5 lg:gap-7 items-center"
                    >
                        <ResumeCanvas />
                        <div className="flex gap-5 items-center">
                            <motion.a
                                href="https://www.linkedin.com/in/perinban-parameshwaran/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInLeft08}
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill={brandColors.linkedin}/>
                                    <path d="M10 14h3.5v11H10V14zm1.75-1.5a2 2 0 110-4 2 2 0 010 4zM16 14h3.4v1.5h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.25 2.36 4.25 5.43V25h-3.5v-5.25c0-1.25-.02-2.86-1.74-2.86-1.75 0-2.01 1.36-2.01 2.77V25H16V14z" fill="white"/>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://github.com/Perinban"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInLeft1}
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill={brandColors.github}/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 8C12.477 8 8 12.477 8 18c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0118 13.58c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C25.138 26.163 28 22.418 28 18c0-5.523-4.477-10-10-10z" fill="white"/>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="mailto:perinban.parameshwaran@ue-germany.de"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInLeft12}
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill={brandColors.gmail}/>
                                    <path d="M10 12h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H10c-.55 0-1-.45-1-1V13c0-.55.45-1 1-1z" fill="white"/>
                                    <path d="M9 13l9 6 9-6" stroke={brandColors.gmail} strokeWidth="1.5"/>
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.p
                        variants={fadeInLeft14}
                        className={`${heroSubText} mt-2 text-secondary text-left`}
                    >
                        I am an&nbsp;
                        <span className="text-accent">
              <Typewriter
                  words={trimmedTitles}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={60}
                  delaySpeed={1500}
              />
            </span>
                    </motion.p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="show"
                variants={slideInUp02}
                className="hidden lg:flex absolute bottom-10 lg:bottom-20 w-full justify-center items-center z-10"
            >
                <a href="#about" aria-label="Scroll to about section">
                    <div className="w-12 h-20 rounded-full border-4 border-accent bg-auxiliary flex justify-center items-center p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
                            className="w-4 h-4 rounded-full bg-secondary shadow-md"
                        />
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
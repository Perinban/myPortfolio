import { motion } from "framer-motion";
import { styles } from "../styles";
import { Typewriter } from "react-simple-typewriter";
import { linkedin, email, github, profileImage } from "../assets";
import { titles } from "../constants";
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
                        <span className="text-accent">Perinban Parameshwaran.</span>
                    </motion.h2>

                    <motion.div
                        variants={fadeInLeft06}
                        className="flex flex-col lg:flex-row gap-5 lg:gap-7 items-center"
                    >
                        <ResumeCanvas />
                        <div className="flex gap-5">
                            <motion.a
                                href="https://www.linkedin.com/in/perinban-parameshwaran-20a7b662/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInLeft08}
                            >
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    className="w-7 md:w-10 hover:scale-105 transition-transform duration-300"
                                />
                            </motion.a>
                            <motion.a
                                href="https://github.com/Perinban"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInLeft1}
                            >
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="w-7 md:w-10 hover:scale-105 transition-transform duration-300"
                                />
                            </motion.a>
                            <motion.a
                                href="mailto:perinban.parameshwaran@ue-germany.de"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInLeft12}
                            >
                                <img
                                    src={email}
                                    alt="Email"
                                    className="w-7 md:w-10 hover:scale-105 transition-transform duration-300"
                                />
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
                    <div className="w-12 h-20 rounded-full border-4 border-tertiary bg-auxiliary flex justify-center items-center p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { open_roles } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const RoleCard = ({ index, title, icon }) => {
    return (
        <Tilt className="w-full xs:w-[200px] sm:w-[250px] flex-grow overflow-visible">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full bg-tertiary p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-xl p-5 min-h-[250px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                    <h3 className="text-secondary text-[18px] sm:text-[20px] font-bold text-center mt-4">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="-my-6">
                <p className={`${styles.sectionSubText} mt-10 text-secondary`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText} text-accent`}>
                    Overview.
                </h2>
                <br/>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary font-semibold text-[16px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px] text-justify"
            >
                Data engineer with 6 years of ETL development experience, driven to expand expertise through a Master's degree in Data Science. Specializing in Ab Initio environments, I leverage my expertise in GDE, Control Center, Conduct IT Plans, Express IT, TRW, Korn Shell Scripting and Oracle SQL to optimize project efficiency. Skilled in Agile and Waterfall SDLCs with a proven track record of driving automation and process improvements. Adept at leading teams, mentoring junior engineers, and delivering high-impact data solutions.
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-7 sm:gap-10 justify-center">
                {open_roles.map((role, index) => (
                    <RoleCard key={role.title} index={index} {...role} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
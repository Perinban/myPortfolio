import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { journeys } from "../constants";
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
const JourneyCard = ({ journey }) => (

  <VerticalTimelineElement
    contentStyle={ { background : '#664C33', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #664C33' }}
    date={<span className="text-accent font-bold">{journey.date}</span>}
    iconStyle={{ background : journey.iconBg }}
    icon = {
      <div className="flex justify-center items-center w-full h-full">
        <img
            src={journey.icon}
            alt={journey.name}
            className="w-[60%] h-[60%] object-contain scale-150"
        />
      </div>
    }
    >
    <div className="text-secondary">
      <h3 className="text-[24px] font-bold">
          {journey.title}
      </h3>
      <p className="text-[16px] font-semibold" style={{ margin:0 }}>
          {journey.name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2 text-justify">
      {journey.points.map((point, index) => (
          <li
              key={`experience-point-${index}`}
              className="text-secondary text-[14px] pd-1 tracking-wider"
          >
            {point}
          </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Journey = () => {
  return (
      <>
        <motion.div
            variants={textVariant()}
            className="-my-5"
            initial="hidden"
            animate="show"
        >
          <p className={`${styles.sectionSubText} text-secondary`}>
              What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-accent`}>
              Journey Through Education and Experience.
          </h2>
            <br/>
        </motion.div>
        <div className="mt-5 flex flex-col">
          <VerticalTimeline>
            {journeys.map((journey, index) => (
                <JourneyCard key={index} journey={journey}/>
            ))}
          </VerticalTimeline>
        </div>
      </>
  )
}

export default SectionWrapper(Journey,"journey")
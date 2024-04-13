import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#44403C",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        
      </div>
      <div>
        {experience.video ?(null):      
        (
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="rounded-2xl float-left w-[100%] p-2 relative "
        />)}

      {experience.video ?(
          <div>
            <video controls width="100%" height="auto">
              <source src={experience.icon} type="video/mp4" />
            </video>
          </div>
      ):null}

        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Nuestros besos.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

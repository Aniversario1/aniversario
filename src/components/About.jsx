import React from "react";
import {Tilt} from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import About_image from "../assets/about.png";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-stone-700 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Electronic-Ing'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants ={textVariant()}>

      <h2 className = {styles.sectionHeadText}>
        Mi amor...
      </h2>
    </motion.div>

    <motion.p 
    variants = {fadeIn("", "", 0.1, 1)} className = ' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Siempre hemos dicho que el tiempo ha pasado muy rápido, y que nos conocimos en diciembre, pero hoy cumplimos un año. Hoy tenemos un perrito y, hasta hoy 13 de abril, hemos cumplido metas juntos, superado miedos y acumulado infinidad de besos. Por eso, quiero recordarte algunos de ellos, junto con las pequeñas cosas que pasaban por mi cabeza. Lo hago aquí porque siento que es algo que nunca se perderá, que, si por cosas de la vida ya no estamos juntos, no se podrá eliminar, romper o quemar.

Quiero que sepas que no importa cuándo leas esto, todos los días te amaré más que el día anterior.
    </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
    </div>
    <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}>
          <img
            src={About_image}
            alt='fondo'
            className='w-full '


          />
        </motion.div>


    </>
  );
};

export default SectionWrapper(About, "about");
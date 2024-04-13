import React from "react";
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import firma from '../assets/Firma.png';

const Autores = () => {
  return (
    <>
<motion.p 
    variants = {fadeIn("", "", 0.1, 1)} className = ' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
     Finalmente, te quiero pedir perdón por los millones de errores que tiene esta página, pero te prometo que pronto me animaré a escribirte una carta o algo a tu altura. Por otro lado, Quiero agradecerte por tantas locuras, por despertame siempre con una sonrisa, por amarme con tanta locura y hacer que todos los días inicien con una sonrisa y se terminen con un beso. Eres el amor de mi vida. 
    </motion.p>
    
    <motion.div
variants = {fadeIn("", "", 0.1, 1)}>
    <img
            src={firma}
            alt='Firma'
            className='w-full '


          />
    </motion.div>

    </>
  )
}

export default SectionWrapper(Autores, "Autores");

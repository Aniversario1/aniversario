import React from 'react'
import {styles} from '../Styles'
import photo from '../assets/profile_wb_2.png'
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div  className={`absolute inset-0 top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#770017]' />
          <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>

        <div>

        <h1 className={`${styles.heroHeadText} text-white`}>
          Feliz primer año mi amor
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            "Miremos" este año de locuras...
          </p>
          </div>
        </div>
    </section>
  )
}

export default Hero
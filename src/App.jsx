import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Recorrido } from "./components";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { textVariant } from "./utils/motion";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-BG-page'>
        <motion.div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'  initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          <Hero />
        </motion.div>
        <About />
        <motion.div variants={textVariant()}>

<h2 className={`${styles.sectionHeadText} mt-4 text-center`}>
Nuestros besos.
</h2>
</motion.div>
        <Experience />
        <div>
          <Recorrido />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

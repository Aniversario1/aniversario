import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Recorrido } from "./components";
import { motion } from "framer-motion";

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
        <Experience />
        <div>
          <Recorrido />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

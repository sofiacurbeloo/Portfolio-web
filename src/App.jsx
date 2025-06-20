// Componentes
import Main from './components/sections/Main';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          className='loader-container'
          initial={{ opacity:1}}
          animate={{ opacity:0}}
          transition={{ duration: .6, delay:1.6 }}
        >
          <img
            src='/snippet/Logo-snippet.webp'
            alt='Cargando...'
            className='loader-gif'
          />
        </motion.div>
      ) : (
        <>
          <Main />
          <About />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

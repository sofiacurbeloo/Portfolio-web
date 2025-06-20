import Button from '../button/Button';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer id='footer' className='footer'>
      <motion.h4
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ¿Tienes alguna idea en mente?
      </motion.h4>
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Puedo hacerla realidad
      </motion.p>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{
          boxShadow: ['0 0 0px #fffff5', '0 0 40px #fffff4', '0 0 0px #fffff4'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        style={{
          borderRadius: '50px',
        }}
        viewport={{ once: true }}
      >
        <Button
          type='extra'
          href='mailto:sofiacurbelo923@gmail.com'
          variant='gmail'
        >
          Contáctame
        </Button>
      </motion.div>
    </footer>
  );
}

export default Footer;

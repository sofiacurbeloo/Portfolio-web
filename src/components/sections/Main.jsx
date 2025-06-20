import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  Paper,
  LinkedinLogo,
  GitHubLogo,
  GmailLogo,
} from '@/icons/Icons';

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <main className='main' id='main'>
      {/* -------- Navbar -------- */}
      <nav className='nav'>
        <div className='nav-top'>
          <a href='#main'>
            <img
              src='/images/SC-Logo.png'
              alt='Logo Sofia Curbelo'
              className='nav-logo-img'
            />
          </a>

          <button
            className={`nav-toggle ${isOpen ? 'open-icon' : ''}`}
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <Menu />
          </button>
        </div>

        <ul className={`nav-link-list ${isOpen ? 'open' : ''}`}>
          <li>
            <a href='#about-me' className='nav-link' onClick={closeMenu}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href='#projects' className='nav-link' onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a
              href='/documents/Certificaciones.pdf'
              className='nav-link'
              target='_blank'
              onClick={closeMenu}
              rel='noopener noreferrer'
            >
              Certificaciones
              <Paper />
            </a>
          </li>
        </ul>
      </nav>

      {/* -------- Hero Image -------- */}
      <motion.img
        src='/images/Hero-img.png'
        alt='Hero image'
        className='hero-img'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* -------- Content -------- */}
      <header className='main-header'>
        <motion.p
          className='main-text-sm'
          initial={{ x: -120 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Hola, bienvenidos!
        </motion.p>
        <motion.p
          className='main-text-sm'
          initial={{ x: 120 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Soy Sofia Curbelo
        </motion.p>
        <motion.h1
          className='main-title'
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          DESARROLLADORA FRONTEND
        </motion.h1>

        <motion.span
          className='main-badge'
          aria-label='Disponible para trabajar'
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Disponible para trabajar
        </motion.span>

        <motion.div
          className='main-contact'
          initial={{  y: 200 }}
          animate={{  y: 0 }}
          transition={{ duration: 1 }}
        >
          <a
            href='https://www.linkedin.com/in/sofia-curbelo/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinLogo />
          </a>
          <a
            href='https://github.com/sofiacurbeloo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubLogo />
          </a>
          <a
            href='mailto:sofiacurbelo923@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GmailLogo />
          </a>
        </motion.div>
      </header>
    </main>
  );
}

export default Main;

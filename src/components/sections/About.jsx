import { motion } from 'framer-motion';
import Button from '../button/Button';
import { LogoMap } from '@/logos/Logos';

const techMap = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind',
  'Sass',
  'Bootstrap',
  'Git',
  'GitHub',
  'Figma',
];

function About() {
  return (
    <section id='about-me' className='about' aria-labelledby='about-me-title'>
      <header className='about-description'>
        <h2 id='about-me-title' className='about-title-mobile'>
          SOBRE MÍ
        </h2>

        <motion.figure
          className='about-img'
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src='/images/Self-img.png' alt='Foto de Sofía Curbelo' />
          <figcaption>Combino código con creatividad</figcaption>
        </motion.figure>

        <motion.article
          className='about-text'
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='about-title-desktop'>SOBRE MÍ</h2>
          <p>
            Mi nombre es Sofía, tengo 23 años y vivo en Uruguay. Estoy en
            proceso constante de aprendizaje para poder brindar siempre el mejor
            servicio. Me caracterizo por la creatividad, imaginación y por la
            fuerte dedicación en crear experiencias visuales agradables,
            accesibles y modernas.
          </p>
          <p>
            Desde el inicio de mi camino en el área tecnológica fui adoptando
            competencias transversales, entre ellas{' '}
            <strong>
              autogestión, proactividad, comunicación y trabajo en equipo.
            </strong>
          </p>
          <Button
            type='primary'
            variant='paper'
            href='/documents/CV-Sofia-Curbelo.pdf'
          >
            CV
          </Button>
        </motion.article>
      </header>

      <div className='about-tech' aria-labelledby='tech-title'>
        <h3 id='tech-title'>Manejo las siguientes tecnologías</h3>
        <ul className='about-tech-stack' role='list'>
          {techMap.map((tech) => {
            const TechLogo = LogoMap[tech];
            return (
              <li key={tech} className='tech-item'>
                <p>{tech}</p>
                <TechLogo aria-label={`${tech} logo`} role='img' />
              </li>
            );
          })}
        </ul>
      </div>

      <motion.aside
        className='about-additional-text'
        aria-label='Objetivo profesional'
        initial={{ opacity: 1, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Mi objetivo es seguir creciendo profesionalmente, colaborar en proyectos
        reales y aportar valor desde el primer día.
      </motion.aside>
    </section>
  );
}

export default About;

import jsonProjects from '@/data/projects.json';
import Card from '../card/Card';
import { motion } from 'framer-motion';

const projectsList = jsonProjects.projects;

function Projects() {
  return (
    <section
      id='projects'
      className='projects'
      aria-labelledby='projects-title'
    >
      <motion.h2
        id='projects-title'
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Proyectos
      </motion.h2>
      {projectsList.map((project, index) => (
        <Card
          key={index}
          project={project}
          type={index % 2 === 0 ? 'light' : 'dark'}
        />
      ))}
    </section>
  );
}

export default Projects;

import Button from "../button/Button";
import { LogoMap } from "@/logos/Logos";
import { motion } from "framer-motion";
import { Build } from "@/icons/Icons";

function Card({ type, project }) {
  return (
    <motion.article
      className={`card ${type}`}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="card-content">
        {/* Para tarjeta en construccion */}
        {project.subtitle ? (
          <div className="project-onbuild">
            <h4>{project.subtitle}</h4>
            <Build />
          </div>
        ) : (
          <div className="card-info">
            <header className="card-header">
              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </header>
            <ul className="card-tech">
              {project.tech.map((tech, index) => {
                const TechLogo = LogoMap[tech];
                return (
                  <li key={index}>
                    {TechLogo ? <TechLogo /> : <span>{tech}</span>}
                  </li>
                );
              })}
            </ul>

            <div className="card-button">
              <Button type="secondary" variant="github" href={project.repo}>
                Repositorio
              </Button>
              <Button type="primary" variant="open" href={project.link}>
                Visitar
              </Button>
            </div>
          </div>
        )}
        {project.image ? (
          <figure className="card-img-container">
            <img
              className="card-img"
              src={project.image}
              alt={`Captura del proyecto ${project.title}`}
            />
          </figure>
        ) : (
          ""
        )}
      </div>
    </motion.article>
  );
}

export default Card;

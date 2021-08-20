import Project from "../UI/Project"
import {projects} from '../data/data.js';
import '../styles/projects.scss';
const Projects = () => {
    return(
        <article className="projects">
  <section className="projects__row">
      {projects.map(project => (
 <Project key={Math.random() * 10000+1} name={project.name} img={project.image} desc={project.description} tools={project.technologies}/>
  ))}
  </section>
        </article>
    ) 
}


export default Projects;
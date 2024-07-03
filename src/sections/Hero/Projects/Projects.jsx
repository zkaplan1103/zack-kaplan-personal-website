import styles from './ProjectsStyles.module.css';
import viberr from '../../../assets/viberr.png';
import freshBurger from '../../../assets/fresh-burger.png';
import ProjectCard from '../../../common/ProjectCard';


function Projects() {
    return (
    <section id="projects" className={styles.container}>
       <h1 className='sectionTitle'> Projects</h1>
       <div className={styles.projectsContainer}>
        < ProjectCard src={viberr} link="https://github.com/zkaplan1103/PersonalWebsite"
        h3="Viberr"
        p = "Streaming App"
        />
        < ProjectCard src={freshBurger} link="https://github.com/zkaplan1103/PersonalWebsite"
        h3="Viberr"
        p = "Streaming App"
        />
       </div>
    </section>
    )
}

export default Projects;
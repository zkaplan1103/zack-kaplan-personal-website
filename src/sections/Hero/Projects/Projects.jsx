import styles from './ProjectsStyles.module.css';
import spacerace from '../../../assets/space-race.png';
import catkingdom from '../../../assets/cat-kingdom.png';
import computer from '../../../assets/computer.png';
import ProjectCard from '../../../common/ProjectCard';


function Projects() {
    return (
    <section id="projects" className={styles.container}>
       <h1 className='sectionTitle'> Projects</h1>
       <div className={styles.projectsContainer}>
        < ProjectCard src={spacerace} link="https://github.com/GAMEDEVMIDTERM01/GameDevFinal"
        h3="Space Race"
        p = "3D Runner"
        />
        < ProjectCard src={catkingdom} link="https://github.com/GAMEDEVMIDTERM01/gamedevmidterm"
        h3="Cat Kingdom"
        p = "2D Platformer"
        />
        < ProjectCard src={computer} link="https://github.com/zkaplan1103/PersonalWebsite"
        h3="Zachary Kaplan"
        p = "Personal Website"
        />
       </div>
    </section>
    )
}

export default Projects;
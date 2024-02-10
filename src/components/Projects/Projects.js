import Project from './Project/Project';
import styles from './Projects.module.css';

const Projects = () => {
    return (<div className={`${styles.projects}`}>
        <Project 
            title='Portfolio Website'
            description='A personal portfolio website to showcase all professional work'
            tag='Website'
            url=''
        />
        <Project 
        title='Ehjez'
        description='Submission for Crown Prince Award for Best Government Service Application. Ehjez is a CoVID vaccine appointment reservation application'
        tag='Mobile App'
        url='https://github.com/mshah21202/ehjez'
    />
    <Project 
        title='Neem'
        description='An eCommerce app made to complete internship at InCubeFZCO'
        tag='Mobile App'
        url='https://github.com/mshah21202/neem'
    />
    </div>);
}

export default Projects;
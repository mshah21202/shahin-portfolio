import styles from './Experiences.module.css'
import Experience from './Experience/Experience';

const Experiences = () => {
    return (
        <div className={`${styles.experiences}`}>
            <Experience
                title='Software Engineering Intern'
                organization='Military Credit Fund'
                start='July 2023'
                end='October 2023'
            >
                <ul>
                    <li>Elicited requirements for an internal system</li>
                    <ul>
                        <li>Created a Software Requirements Specification.</li>
                    </ul>
                    <li>Planned a solution that integrates with existing systems.</li>
                    <ul><li>Built said solution using ASP.NET & Flutter.</li></ul>
                    <li>Implemented best practices & file structure in Flutter.</li>
                    <li>Successfully implemented StateManagement pattern BLoC</li>
                    <li>Created an interactive prototype using Figma.</li>
                    <ul><li>Built a design system to simplify building prototypes.</li></ul>

                </ul>
            </ Experience>
            <Experience
                title='Software Engineering Intern'
                organization='InCubeFZCO'
                start='August 2022'
                end='October 2022'
            >
                <ul>
                    <li>Successfully designed and implemented API using ASP.net Core.</li>
                    <li>Integrated API with Flutter application.</li>
                    <li>Learned best practices & file structure in Flutter.</li>
                    <li>Successfully implemented StateManagement pattern BLoC.</li>
                </ul>
            </ Experience>
            <Experience
                title='Full-Stack Flutter Developer'
                organization='Self-Employed'
                start='June 2020'
                end='October 2021'
            >
                <ul>
                    <li>Designed & implemented small-scale applications.</li>
                    <li>Configured Firebase for Flutter use.</li>
                </ul>
            </ Experience>
        </div>
    );
}

export default Experiences;
import styles from './Project.module.css'
import typography from '../../../theme/typography.module.css'

const Project = ({ title, description, tag, url }) => {

    const goToProject = () => {
        window.open(url, '_blank').focus();
    }

    return (<div className={`${styles.project}`}>
        <div className={`${styles['title-cta']}`}>
            <div className={`${typography['headline-small']} ${styles.title}`}>{title}</div>
            <div className={`${styles.view} ${typography['body-medium']}`} onClick={goToProject}>
                <div>View</div>
                <span className={`material-symbols-outlined`} style={{fontSize: '16px'}}>
                    open_in_new
                </span>
            </div>
        </div>
        <div className={`${styles.description} ${typography['body-medium']}`}>
            {description}
        </div>
        <div className={`${styles.tag}`}>
            {/* <div className={`${styles.dot}`}></div> */}
            {tag}
        </div>
    </div>);
}

export default Project;
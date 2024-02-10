import styles from './Experience.module.css'
import typography from '../../../theme/typography.module.css';
import { useEffect, useState } from 'react';

const Experience = ({ title, organization, children, start, end }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

    })

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (<div className={`${styles.experience}`} onClick={toggleOpen}>
        <div className={`${styles.container}`}>
            <div className={`${styles['title-organization']}`}>
                <div className={`${typography['headline-small']} ${styles.title}`}>{title}</div>
                <div className={`${typography['body-medium']} ${styles.subtitle}`}>{organization}</div>
            </div>
            <div className={`${styles['dates-arrow']}`}>
                <div className={`${styles.dates}`}>
                    <div className={`${styles.date}`}>{start}</div>
                    <span className={`material-symbols-outlined ${styles.date}`}>
                        arrow_right_alt
                    </span>
                    <div className={`${styles.date}`}>{end}</div>
                </div>
                <span className={`material-symbols-outlined ${styles.date} ${styles.arrow} ${isOpen ? styles.down : ''}`}>
                    keyboard_arrow_down
                </span>
            </div>
        </div>
        <div className={`${styles['content-container']}`}>
            <div className={`${styles.content} ${isOpen ? styles.expanded : ''}`}>
                {children}
            </div>
        </div>
    </div>);
}

export default Experience;
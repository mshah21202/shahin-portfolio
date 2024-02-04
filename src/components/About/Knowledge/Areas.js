import styles from './Knowledge.module.css';
import typography from '../../../theme/typography.module.css';


const Areas = ({children}) => {
    return ( <div className={`${styles.areas}`}>
        <div className={`${typography['headline-small']} ${styles.subtitle}`}>Knowledge Areas</div>
        <div className={`${styles['areas-grid']}`}>
            {children}
        </div>
    </div> );
}
 
export default Areas;
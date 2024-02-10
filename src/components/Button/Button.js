import styles from './Button.module.css';
import typography from '../../theme/typography.module.css';

const Button = ({title, type, purpose, icon, onClick, formType}) => {
    return (
        <button type={formType} onClick={onClick} className={`${styles.btn} ${styles[`${type}`]} ${styles[`${purpose}`]} ${typography['label-large']}`} >
            {icon}
            <div className={`${styles.title}`}>{title}</div>
        </button>
    );
}
 
export default Button;
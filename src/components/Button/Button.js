import styles from './Button.module.css';
import typography from '../../theme/typography.module.css';

const Button = ({title, style, purpose, icon}) => {
    return (
        <div className={`${styles.btn} ${styles[`${style}`]} ${styles[`${purpose}`]} ${typography['label-large']}`}>
            {icon}
            <div className={`${styles.title}`}>{title}</div>
        </div>
    );
}
 
export default Button;
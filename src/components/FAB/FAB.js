import styles from './FAB.module.css';

const FAB = ({icon, onClick}) => {
    return ( <div className={`${styles.fab}`} onClick={onClick}>
        {icon}
    </div> );
}
 
export default FAB;
import Column from '../Layout/Column/Column';
import Row from '../Layout/Row/Row';
import styles from './Introduction.module.css';
import typography from '../../theme/typography.module.css';
import Button from '../Button/Button';
import image from '../../assets/personal_pic.png'

const Introduction = () => {
    var downloadIcon = (<span class="material-symbols-outlined">
    downloading
    </span>)


    return (
    <div className={`${styles.introduction}`}>
        <Row>
            <div className={`${styles.left}`}>
                <Column gap={20}>
                    <Column gap={5}>
                        <div className={`${typography['headline-small']} ${styles.subtitle}`}>Hi, I'm</div>
                        <div className={`${typography['display-large']}`}>Mohamad Shahin</div>
                    </Column>
                        <div className={`${styles.line}`}></div>
                        <div className={`${styles.subtitle} ${typography['headline-small']}`}>Software Engineer</div>
                        <Column gap={10}>
                            <Button title={"Learn More"} style={'tonal'}></Button>
                            <Button title={"Downlad CV"} style={'outline'} icon={downloadIcon}></Button>
                        </Column>
                </Column>
            </div>
            <div className={`${styles.right}`}>
                <img src={image} alt='Personal Portrait' className={`${styles.pic}`}></img>
            </div>
        </Row>
    </div>
    );
}
 
export default Introduction;
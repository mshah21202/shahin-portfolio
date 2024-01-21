import styles from './Personal.module.css'
import typography from '../../theme/typography.module.css'
import Column from '../Layout/Column/Column.js'
import image from '../../assets/personal_pic.png'
import { CrossAxisAlignment, MainAxisAlignment } from '../Layout/Layout.js'

const Personal = () => {
    console.log(typography);
    return (
        <div className={`${styles.personal}`}>
            <Column mainAxisAlignment={MainAxisAlignment.center} crossAxisAlignment={CrossAxisAlignment.center}>
                <div className={`${styles['personal-pic-container']}`}>
                    <img src={image} alt='Personal Portrait' className={`${styles['personal-pic']}`} />
                </div>
                <h3 className={`${typography['headline-large']}`}>Mohmad Shahin</h3>
            </Column>
        </div>
    );
}
 
export default Personal;
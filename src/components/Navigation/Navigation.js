import styles from './Navigation.module.css'
import Column from '../Layout/Column/Column'
import typography from '../../theme/typography.module.css'
import Row from '../Layout/Row/Row'
import { MainAxisAlignment } from '../Layout/Layout';

const Navigation = ({items}) => {
    var itemsInDiv = Array(items)[0].map((value) => {
        return <div className={`${styles.link} ${typography['title-medium']}`}>{value}</div>
    });
    var indicators = [];
    itemsInDiv.forEach((value) => {
        indicators.push(<div className={`${styles.indicator}`}></div>)
    });
    return (
        <div className={`${styles.navigation}`}>
            <Column expanded={true}>
                <Row mainAxisAlignment={MainAxisAlignment.center} stretch={true}>
                    <Column mainAxisAlignment={MainAxisAlignment.spaceBetween} expanded={true}>
                        {indicators}
                    </Column>
                    <div style={{width:'20px'}}></div>
                    <Column mainAxisAlignment={MainAxisAlignment.spaceBetween} expanded={true}>
                        {itemsInDiv}
                    </Column>
                </Row>
            </Column>
        </div>
    );
}
 
export default Navigation;
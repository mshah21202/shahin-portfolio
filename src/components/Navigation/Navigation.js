import styles from './Navigation.module.css'
import Column from '../Layout/Column/Column'
import typography from '../../theme/typography.module.css'
import Row from '../Layout/Row/Row'
import { CrossAxisAlignment, MainAxisAlignment } from '../Layout/Layout';
import { useEffect, useState } from "react";



const Navigation = ({items}) => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        // This will calculate how many pixels the page is vertically
        const winScroll = window.scrollY;
        // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
    
        // This will calculate the final total of the percentage of how much the user has scrolled.
        const scrolled = (winScroll / height) * 95;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        // Fires when the document view has been scrolled
        window.addEventListener("scroll", onScroll);
    
        // 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
                    <Column mainAxisAlignment={MainAxisAlignment.spaceBetween} crossAxisAlignment={CrossAxisAlignment.center} expanded={true}>
                        <div className={`${styles.progress}`}></div>
                        <div className={`${styles.progress} ${styles.active}`} style={{height: `${scrollTop}%`, transition: 'all 0s'}}></div>
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
import styles from './Navigation.module.css'
import infoStyles from '../Info/Info.module.css'
import Column from '../Layout/Column/Column'
import typography from '../../theme/typography.module.css'
import Row from '../Layout/Row/Row'
import { CrossAxisAlignment, MainAxisAlignment } from '../Layout/Layout';
import { useEffect, useState } from "react";



const Navigation = ({items}) => {
    const [scrollTop, setScrollTop] = useState(0);

    var itemsInDiv = Array(items)[0].map((value) => {
        return <div className={`${styles.link} ${typography['title-medium']}`}>{value}</div>
    });
    var indicators = [];
    itemsInDiv.forEach((value) => {
        indicators.push(<div className={`${styles.indicator}`}></div>)
    });

    function calculatePercentage(distances, scroll, scrollMax) {
        let k = distances.length;
    
        // Handle edge case where scroll is greater than or equal to scrollMax
        if (scroll >= scrollMax - 150) {
            return 100;
        }
    
        // Handle edge case where scroll is less than the first distance
        if (scroll <= distances[0]) {
            return 0;
        }
    
        // Find the interval where scroll fits and perform linear interpolation
        for (let i = 0; i < k - 1; i++) {
            if (scroll <= distances[i + 1]) {
                let percentagePerStep = 100 / (k - 1);
                let stepPercentage = percentagePerStep * (i + (scroll - distances[i]) / (distances[i + 1] - distances[i]));
                return stepPercentage;
            }
        }
    
        // Edge case where scroll is larger than all distances but less than scrollMax
        return 100 / (k - 1) * (k - 1);
    }

    var getElemDistance = function ( elem ) {
        var location = 0;
        if (elem.offsetParent) {
            do {
                location += elem.offsetTop;
                elem = elem.offsetParent;
            } while (elem);
        }
        return location >= 0 ? location : 0;
    };

    const onScroll = () => {
        // Get sections element
        var sectionsDistance = [];
        var sections = document.querySelectorAll(`div.${infoStyles.info} > div[id]`)

        sections.forEach((section, index) => {
            sectionsDistance.push(getElemDistance(section) - 150);
        });

        var scrollMax = document.documentElement.scrollHeight - document.documentElement.clientHeight - 1

        // Map each section's scroll position to a percentage value based on the section's order
        var scrolled = calculatePercentage(sectionsDistance, window.scrollY, scrollMax);

        // Get indicators
        var indicators = document.querySelectorAll(`div.${styles.indicator}`);
        
        // Apply active to indicator if scrolled >= index*(100/(number of indicators))
        indicators.forEach((indicator, index) => {
            if (scrolled >= index*(100/(indicators.length-1))) {
                indicator.classList.add(`${styles.active}`);
            } else {
                indicator.classList.remove(`${styles.active}`);
            }
        });

        setScrollTop(scrolled);
    };

    useEffect(() => {
        // Fires when the document view has been scrolled
        window.addEventListener("scroll", onScroll);
    
        // 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    
    return (
        <div className={`${styles.navigation}`}>
            <Column expanded={true}>
                <Row mainAxisAlignment={MainAxisAlignment.center} stretch={true}>
                    <Column mainAxisAlignment={MainAxisAlignment.spaceBetween} crossAxisAlignment={CrossAxisAlignment.center} expanded={true}>
                        <div className={`${styles.progress}`}></div>
                        <div className={`${styles.progress} ${styles.active}`} style={{transform: `scaleY(${scrollTop/100})`}}></div>
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
import styles from './Sidebar.module.css'
import Column from '../Layout/Column/Column.js'
import Personal from '../Personal/Personal.js';
import Navigation from '../Navigation/Navigation.js';
import {MainAxisAlignment} from '../Layout/Layout.js'

const Sidebar = () => {
    return (
        <div className={`${styles.sidebar}`}>
            <Column mainAxisAlignment={MainAxisAlignment.center} expanded={true}>
                <Personal />
                <Navigation items={["About", "Experience", "Resume", "Services", "Contact"]} />
            </Column>
        </div>
    );
}
 
export default Sidebar;
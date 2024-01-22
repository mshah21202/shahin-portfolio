import styles from "./Info.module.css"

const Info = () => {
    return (
        <div className={`${styles.info}`}>
            <div id="About">About</div>
            <div style={{height: '200vh'}}></div>
            <div id="Experience">Experience</div>
            <div style={{height: '50vh'}}></div>
            <div id="Resume">Resume</div>
            <div style={{height: '150vh'}}></div>
            <div id="Services">Services</div>
            <div style={{height: '20vh'}}></div>
            <div id="Contact">Contact</div>
            <div style={{height: '30vh'}}></div>
        </div>
    );
}
 
export default Info;
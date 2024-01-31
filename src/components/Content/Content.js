import Introduction from "../Introduction/Introduction";
import styles from "./Content.module.css";

const Content = ({ onToggleSidebar }) => {
	var menuIcon = (
		<span className={`material-symbols-outlined ${styles["menu-icon"]}`}>
			menu
		</span>
	);

	return (
		<div className={`${styles.content}`}>
			<div className={`${styles["app-bar"]}`}>
				<div className={`${styles.menu}`} onClick={onToggleSidebar}>
					{menuIcon}
				</div>
			</div>
			<Introduction />
			<div id="About">About</div>
			<div style={{ height: "200vh" }}></div>
			<div id="Experience">Experience</div>
			<div style={{ height: "50vh" }}></div>
			<div id="Projects">Projects</div>
			<div style={{ height: "150vh" }}></div>
			<div id="Services">Services</div>
			<div style={{ height: "20vh" }}></div>
			<div id="Contact">Contact</div>
			<div style={{ height: "30vh" }}></div>
		</div>
	);
};

export default Content;

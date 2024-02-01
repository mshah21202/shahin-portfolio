import { useEffect } from "react";
import Introduction from "../Introduction/Introduction";
import styles from "./Content.module.css";

const Content = ({ onToggleSidebar }) => {

	const onScroll = () => {
		const bar = document.querySelector(`div.${styles["app-bar"]}`);
		console.log(`.${styles["app-bar"]}`);
		if (bar !== null && window.scrollY > 0) {
			bar.classList.add(`${styles.shadow}`);
		} else if (bar !== null){
			bar.classList.remove(`${styles.shadow}`);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
	});

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

import About from "../About/About";
import { useEffect } from "react";
import Introduction from "../Introduction/Introduction";
import Section from "../Section/Section";
import styles from "./Content.module.css";
import Experience from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Content = ({ onToggleSidebar }) => {

	const onScroll = () => {
		const bar = document.querySelector(`div.${styles["app-bar"]}`);
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
			<Section title='About' ><About /></Section>
			<Section title='Experience' bottomBorder={false}><Experience /></Section>
			<Section title='Projects' ><Projects /></Section>
			<Section title='Contact' ><Contact /></Section>
		</div>
	);
};

export default Content;

import About from "../About/About";
import Introduction from "../Introduction/Introduction";
import Section from "../Section/Section";
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
			<Section title='About' ><About /></Section>
			<Section title='Experience' ><About /></Section>
			<Section title='Projects' ><About /></Section>
			<Section title='Services' ><About /></Section>
			<Section title='Contact' ><About /></Section>
		</div>
	);
};

export default Content;

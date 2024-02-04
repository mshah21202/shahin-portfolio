import styles from "./Section.module.css";
import typography from "../../theme/typography.module.css";

const Section = ({ children, title }) => {
	return (
		<div className={`${styles.section}`}>
			<div className={`${styles.title}`}>
				<div id={title} className={`${typography["headline-large"]}`}>
					{title}
				</div>
				<div className={`${styles.line}`}></div>
			</div>
			{children}
		</div>
	);
};

export default Section;

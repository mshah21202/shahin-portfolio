import styles from "./About.module.css";
import typography from "../../theme/typography.module.css";
import Areas from "./Knowledge/Areas";
import Knowledge from "./Knowledge/Knowledge";

const About = () => {
	return (
		<div className={`${styles.about}`}>
			<div className={`${styles.subtitle} ${typography['body-small']}`}>
				Quis ultricies euismod et felis eu. Pulvinar amet cras eu amet magna
				neque euismod in. Massa lectus tortor sit et euismod scelerisque mauris
				neque. Lectus nibh bibendum enim quam. Est nec duis pretium diam et
				cras.
			</div>
			<Areas>
				<Knowledge title="Mobile Development" percentage={0.89} />
				<Knowledge title="UI/UX Design" percentage={0.78} />
				<Knowledge title="Backend Development" percentage={0.64} />
			</Areas>
		</div>
	);
};

export default About;

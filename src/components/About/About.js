import styles from "./About.module.css";
import typography from "../../theme/typography.module.css";
import Areas from "./Knowledge/Areas";
import Knowledge from "./Knowledge/Knowledge";

const About = () => {
	return (
		<div className={`${styles.about}`}>
			<div className={`${styles.subtitle} ${typography['body-medium']}`}>
				Hi, I'm Mohamad. I am a software engineer experienced in building mobile applications and websites for all purposes.
				 I am always looking for a challenging project, so if you have a challenge for me let's talk!
			</div>
			<Areas>
				<Knowledge title="Mobile App Development" percentage={0.89} />
				<Knowledge title="UI/UX Design" percentage={0.78} />
				<Knowledge title="Backend Development" percentage={0.64} />
			</Areas>
		</div>
	);
};

export default About;

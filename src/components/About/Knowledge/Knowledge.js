import styles from "./Knowledge.module.css";
import typography from "../../../theme/typography.module.css";
import { useRef } from "react";
import useOnScreen from "../../UseOnScreen";
import AnimatedNumber from "react-animated-number";

const Knowledge = ({ title, percentage }) => {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref);

	return (
		<div className={`${styles.knowledge}`} ref={ref}>
			<div
				className={`${styles["title-percentage"]} ${typography["body-medium"]}`}>
				<div className={`${styles.title}`}>{title}</div>
				<div className={`${styles.percentage}`}>
					<AnimatedNumber
						style={{
							transition: "all 0.7s ease-in",
						}}
						value={isVisible ? percentage * 100 : 0}
						formatValue={n => `${n.toFixed(0)}%`}
					/>
				</div>
			</div>
			<div className={`${styles.progress}`}>
				<div className={`${styles["progress-bar"]} ${styles.bg}`}>
					<div
						className={`${styles["progress-bar"]} ${styles.active}`}
						style={{
							transform: `scaleX(${isVisible ? percentage : 0})`,
						}}></div>
				</div>
			</div>
		</div>
	);
};

export default Knowledge;

import styles from "./Sidebar.module.css";
import contentStyles from "../Content/Content.module.css";
import Column from "../Layout/Column/Column.js";
import Personal from "../Personal/Personal.js";
import Navigation from "../Navigation/Navigation.js";
import { MainAxisAlignment } from "../Layout/Layout.js";
import { useEffect, useState } from "react";

const Sidebar = ({ isVisible, isMobile, onToggleSidebar }) => {
	const [sections, setSections] = useState();
	// Get all sections

	function getSections() {
		var sectionNodes = document.querySelectorAll(
			`div.${contentStyles.content} > div[id]`
		);
		return Array.from(sectionNodes);
	}

	useEffect(() => {
		setSections(getSections());
	}, []);

	return (
		<div>
			<div className={`${styles.bg}`} style={{ display: isMobile && !isVisible ? "none" : "initial" }} onClick={onToggleSidebar} disabled={isMobile && !isVisible}></div>
			<div
				className={`${styles.sidebar} ${isMobile && isVisible ? styles.open : ''} `}>
				<Column mainAxisAlignment={MainAxisAlignment.center} expanded={true}>
					<Personal />
					<Navigation items={sections} onNavigate={onToggleSidebar} />
				</Column>
			</div>
		</div>
	);
};

export default Sidebar;

import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import Row from "./components/Layout/Row/Row";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
	const [showSidebar, setShowSidebar] = useState(false);

	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

	function isMobilePhone() {
		return windowSize[0] <= 768;
	}

	const toggleSidebar = () => {
		if (!isMobilePhone()) {
			setShowSidebar(true);
		} else {
			setShowSidebar(!showSidebar);
		}
	};

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};


		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<div className={`${styles.main}`}>
			<Row>
				<Sidebar isVisible={showSidebar} isMobile={isMobilePhone()} onToggleSidebar={toggleSidebar} />
				<Content onToggleSidebar={toggleSidebar} />
			</Row>
		</div>
	);
}

export default App;

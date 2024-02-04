import styles from "./App.module.css";
import React, { useContext, useEffect, useState } from "react";
import Row from "./components/Layout/Row/Row";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import FAB from "./components/FAB/FAB";
import { ThemeContext } from './theme/ThemeProvider';

function App() {
	const [showSidebar, setShowSidebar] = useState(false);

	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

	const { theme, toggleTheme } = useContext(ThemeContext)

	function isMobilePhone() {
		return windowSize[0] <= 992;
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
	});

	return (
		<div className={`${styles.main}`}>
			<FAB icon={<span className="material-symbols-outlined">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>} onClick={toggleTheme}/>
			<Row>
				<Sidebar
					isVisible={showSidebar}
					isMobile={isMobilePhone()}
					onToggleSidebar={toggleSidebar}
				/>
				<Content onToggleSidebar={toggleSidebar} />
			</Row>
		</div>
	);
}

export default App;

import styles from './App.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from './theme/ThemeProvider';
import Row from './components/Layout/Row/Row';
import Sidebar from './components/Sidebar/Sidebar';
import Info from './components/Info/Info';

function App() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.main}`}>
      <Row>
        <Sidebar />
        <Info />
      </Row>
    </div>
  );
}

export default App;

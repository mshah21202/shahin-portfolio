import styles from './App.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from './theme/ThemeProvider';
import Row from './components/Layout/Row/Row';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.main}`}>
      <Row>
        <Sidebar />
        <Content />
      </Row>
    </div>
  );
}

export default App;

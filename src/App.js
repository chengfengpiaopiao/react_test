import React from 'react';
import logo from './logo.svg';
import {
    Link,
} from 'react-router-dom'
import styles from  './App.css';

function App() {
  return (
    <div>
      <header >
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
          <Link to="/style_simple">

              <div className={styles.App}>this Project is for React</div>

          </Link>
          <div className={styles.AppLink}>this Project is for React</div>

      </header>
    </div>
  );
}

export default App;

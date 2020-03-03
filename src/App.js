import React from 'react';
import {
    Link,
} from 'react-router-dom'
import styles from  './App.css';
import "../public/banner1.jpg"
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
          <div>
              <div className={styles.Bg}></div>
          </div>
      </header>
    </div>
  );
}

export default App;

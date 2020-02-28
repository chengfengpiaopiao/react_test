import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StyleSimpleTest from "./css/StyleSimpleTest";
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter ,
    Route,
    Link,
    Switch
} from 'react-router-dom'

ReactDOM.render(<BrowserRouter >
    <Switch>
        <Route  exact path="/" component={App}/>
        <Route  path="/style_simple" component={StyleSimpleTest}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

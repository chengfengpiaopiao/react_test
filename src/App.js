import React from 'react';
import {
    Link,
} from 'react-router-dom'
import styles from  './App.css';
import $ from 'jquery'
class App extends React.Component{
    componentDidMount() {
        var str = "." +styles.mouse_on_wrap;
        $("#show_ewm_img").mouseenter(function () {
            $(str).addClass(styles.mouse_bg)
        });

        $("#show_ewm_img").mouseleave(function () {
            $(str).removeClass(styles.mouse_bg)
        });
    }

    render() {
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

                    <div>测试JQuery</div>

                    <h2 id="show_ewm_img">鼠标悬浮出现图片</h2>

                    <div id="mouse_wrap" className={styles.mouse_on_wrap}>
                        <img src="./public/banner1.jpg" width={200}/>

                    </div>

                </header>
            </div>
        );
    }
}

export default App;

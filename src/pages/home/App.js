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

                    <div className={styles.AppLink}>this Project is for React</div>
                    <div>
                        <div className={styles.Bg}></div>
                    </div>

                    <div>首页</div>

                    <h2 id="show_ewm_img">鼠标悬浮出现图片</h2>

                    <div id="mouse_wrap" className={styles.mouse_on_wrap}>
                        <img src="./public/banner1.jpg" width={200}/>

                    </div>

                    1-----------高级属性：not
                    <nav className={styles.nav}>
                        <ul>
                            <li>测试1</li>
                            <li>测试2</li>
                            <li>测试3</li>
                            <li>测试4</li>
                        </ul>
                    </nav>
                    2----------高级属性：黑白图像
                    <img src="./public/banner1.jpg" width={200} className={styles.white_black_img}/>

                    3---------组件顶部阴影
                    <div className={styles.shadow_wrap}>CSS</div>

                    4---------给 body 添加行高

                    5--------css滑块
                    <div className={styles.slider_wrap}><h2>sdds</h2><div>CSS滑块</div></div>

                </header>
            </div>
        );
    }
}

export default App;

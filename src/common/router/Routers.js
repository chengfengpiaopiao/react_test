import React, {Component} from 'react';
import {
    BrowserRouter ,
    Route,
    Switch,
} from 'react-router-dom'


import DashHome from "./DashHome";

class Routers extends Component {
    render() {
        return (
            <BrowserRouter >
                <Switch>
                <Route  path="/" component={DashHome} />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routers;
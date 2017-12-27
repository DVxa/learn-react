import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Grid from '../components/grid';
//import Main from '../components/main';
import UserDetails from '../components/user-details';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/*<Route component={Main} path=""/>*/}
                    <Route component={Grid} path="/grid"/>
                    <Route component={UserDetails} path="/users/:id"/>
                    {/* <Route component={UserDetails} path="/users"/> */}
                </Switch>
            </BrowserRouter>
        );
    }
}

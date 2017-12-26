import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
// import UserDetail from '../components/user-detail';
import UserDetails from '../components/user-details';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={UserDetails} path="/users/:id"/>
                    <Route component={UserDetails} path="/users"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

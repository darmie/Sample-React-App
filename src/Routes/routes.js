import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import HomePage from '../View/Home';
import Login from '../View/Login';
import SignUp from '../View/Signup';


// var URL = "https://darmie.github.io/Sample-React-App" // process.env.PUBLIC_URL

export default ()=> (
    <HashRouter basename={'/Sample-React-App'}>
        <Switch>
            <Route path={'/'} exact component={HomePage} />
            <Route path={'/home'} component={HomePage} />
            <Route path={'/signup'} component={SignUp} />
            <Route path={'/login'} component={Login} />
        </Switch>
    </HashRouter>
);
'use strict';

import React,{ Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import AsyncComponent from './AsyncComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = AsyncComponent(() => import('../container/Login').then(module => module.default), {name: 'Login'});
const About = AsyncComponent(() => import('./About').then(module => module.default), {name: 'About'});
const Posts = AsyncComponent(() => import('./Posts').then(module => module.default), {name: 'Posts'});
const NoMatch = AsyncComponent(() => import('./NoMatch').then(module => module.default), {name: 'NoMatch'});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div id="container">
                    <SideBar />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Posts} />
                        <Route path="/login" component={Login} />
                        <Route path="/about" component={About} />
                        <Route path="/posts" component={Posts} />
                        <Route component={NoMatch} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Main;
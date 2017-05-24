'use strict';

import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import asyncComponent from '../components/AsyncComponent';
import About from '../components/About';
import Dashboard from '../components/Dashboard';
import NoMatch from '../components/NoMatch';

import Counter from './Counter';
import Login from './Login';
import Register from './Register';
// const About = asyncComponent(() => import('./About').then(module => module.default), {name: 'About'});
// const Dashboard = asyncComponent(() => import('./Dashboard').then(module => module.default), {name: 'Dashboard'});
// const NoMatch = asyncComponent(() => import('./NoMatch').then(module => module.default), {name: 'NoMatch'});

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div id="container">
                    <SideBar />
                    <Header />
                    <div id="content-wrapper">
                        <div className="mui--appbar-height"></div>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/about" component={About} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/counter" component={Counter} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
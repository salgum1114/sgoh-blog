'use strict';

import React,{ Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import Content from './Content';
import About from './About';
import NoMatch from './NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
                        <Route exact path="/" getComponent={(location, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require('./Content').default);
                            }, 'Content');
                        }} />
                        <Route path="/about" getComponent={(location, callback) => {
                            
                        }}/>
                        <Route path="/posts" component={Content} />
                        <Route component={NoMatch} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Main;
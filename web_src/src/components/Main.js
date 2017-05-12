import React,{ Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import Content from './Content';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <SideBar />
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Main;
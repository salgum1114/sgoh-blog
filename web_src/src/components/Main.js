import React,{ Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import Content from './Content';

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
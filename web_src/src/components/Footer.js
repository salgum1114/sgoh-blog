import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="footer">
                <div className="mui-container-fluid">
                    <br />
                    Made with ♥ by <a href="https://www.muicss.com">MUI</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class App extends React.Component {
    render(){

        return (
            <MuiThemeProvider>
                <MyAwesomeReactComponent />
            </MuiThemeProvider>
        );
    }
}

export default App;
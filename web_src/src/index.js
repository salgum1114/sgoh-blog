import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from './components/Main';

const rootElement = document.getElementById('root');    
ReactDOM.render(
    <MuiThemeProvider>
        <Main />
    </MuiThemeProvider>
    , rootElement
);
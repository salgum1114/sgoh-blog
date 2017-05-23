'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import '../less/app.less';
import Main from './components/Main';

let rootElement = document.getElementById('root');
const render = Component => {
    ReactDOM.render(
            <Provider store={configureStore}>
        <AppContainer>
                <MuiThemeProvider>
                        <Component />
                </MuiThemeProvider>
        </AppContainer>
            </Provider>
        , rootElement
    );
}

render(Main);

if (module.hot) {
    module.hot.accept('./components/Main', () => {
        render(Main);
    });
}
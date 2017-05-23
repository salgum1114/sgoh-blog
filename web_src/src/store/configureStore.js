'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/user';
import promiseMiddleware from '../middleware/promiseMiddleware';

export default function(initialState) {
    const enhancer = compose(applyMiddleware(promiseMiddleware));
    return createStore(reducer, initialState, enhancer);
};

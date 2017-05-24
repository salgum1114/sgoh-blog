'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Counter extends Component {

    constructor(props) {
        super(props);
        
    }
    
    handleAdd = () => {
        const { handleIncrement } = this.props;
        handleIncrement();
    }

    handleRemove = () => {
        const { handleDecrement } = this.props;
        handleDecrement();
    }

    render() {
        return (
            <div className="mui-container-fluid">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col col-centered">
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                            {this.props.number}
                        </button>
                    </div>
                </div>
                
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col col-centered">
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                            <i className="material-icons" onClick={this.handleAdd}>add</i>
                        </button>
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                            <i className="material-icons" onClick={this.handleRemove}>remove</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Counter);
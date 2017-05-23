'use strict';

// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import LoginForm from '../components/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;

        return (
            <LoginForm
                isLoggedIn={user.isLoggedIn}
                login={(id, pw) => dispatch(login(id, pw))}
            />
        );
    }
};

function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps)(Login);

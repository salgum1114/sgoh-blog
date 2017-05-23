'use strict';

// @flow
import React, { Component } from 'react';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefult();
        const { login } = this.props;
        let id = this.id.value;
        let pw = this.password.value;
        login(id, pw);
    }
    
    render() {
        const { isLoggedIn, login } = this.props;

        return (
            isLoggedIn ?
            <div>로그인 성공</div> :
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span>아이디</span>
                    <input ref={(ref) => { this.id = ref; }} />
                </label>
                <label>
                    <span>비밀번호</span>
                    <input type="password" ref={(ref) => { this.password = ref; }} />
                </label>
            </form>
        );
    }
};
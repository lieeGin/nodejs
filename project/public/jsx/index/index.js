/**
 * Created by lieeGin on 2017/2/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Col,
    InputGroup,
    Glyphicon
} from 'react-bootstrap';


const LoginForm = React.createClass({
    getInitialState() {
        return {
            userName: '',
            password: ''
        };
    },

    getUserNameValidationState() {
        var length = this.state.userName.length;
        if (length==0) return null;
        else if(length > 2) return 'success';
        else return 'error';
    },
    getPasswordValidationState() {
        var length = this.state.password.length;
        if (length==0 ) return null;
        else if( length > 8) return 'success';
        else return 'error';
    },
    handleUserNameChange(e){
        this.setState({userName: e.target.value});
    },
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    },

    render() {

        return (
            <Form horizontal>
                <FormGroup controlId="formTitle">
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <ControlLabel>请登录</ControlLabel>
                    </Col>
                </FormGroup>

                <FormGroup controlId="userName" validationState={this.getUserNameValidationState()}>
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="user"/>
                            </InputGroup.Addon>
                            <FormControl
                                type="text"
                                name="userName"
                                value={this.state.userName}
                                placeholder="请输入账号"
                                onChange={this.handleUserNameChange}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup controlId="password" validationState={this.getPasswordValidationState()}>
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock"/>
                            </InputGroup.Addon>
                            <FormControl
                                type="password"
                                name="password"
                                value={this.state.password}
                                placeholder="请输入密码"
                                onChange={this.handlePasswordChange}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formTail">
                        <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                            <HelpBlock>还没有账号？<a href="/register">快来注册！</a></HelpBlock>
                        </Col>
                </FormGroup>
            </Form>
        );
    }
});

ReactDOM.render(
    // React.createElement(loginForm, null),
    <LoginForm/>,
    document.getElementById('content')
);




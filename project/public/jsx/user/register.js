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
    Button,
    ButtonToolbar,
    Col,
    HelpBlock,
    InputGroup,
    Glyphicon
} from 'react-bootstrap';


const RegisterForm = React.createClass({
    getInitialState() {
        return {
            userName: '',
            password: '',
            password2: '',
            isLoading:false
        };
    },

    getUserNameValidationState() {
        var length = this.state.userName.length;
        if (length == 0) return null;
        else if (length > 2) return 'success';
        else return 'error';
    },
    getPasswordValidationState() {
        var length = this.state.password.length;
        if (length == 0) return null;
        else if (length > 8) return 'success';
        else return 'error';
    },
    getPassword2ValidationState() {
        var length = this.state.password2.length;
        if (length == 0) return null;
        else if (length > 8 || this.state.password == this.state.password2) return 'success';
        else return 'error';
    },
    handleUserNameChange(e){
        this.setState({userName: e.target.value});
    },
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    },
    handlePassword2Change(e) {
        this.setState({password2: e.target.value});
    },
    //提交
    submit(){
        console.log('submit');
        this.setState({isLoading: true});


        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({isLoading: false});
        }, 2000);

    },
    //清空
    clear(){
        console.log('clear');
        this.setState({
            userName:'',
            password:'',
            password2:'',
            isLoading:false
        });
    },

    render() {

        return (
            <Form horizontal>
                <FormGroup controlId="formTitle">
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <ControlLabel>请填写注册信息</ControlLabel>
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
                <FormGroup controlId="password2" validationState={this.getPassword2ValidationState()}>
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock"/>
                            </InputGroup.Addon>
                            <FormControl
                                type="password"
                                name="password2"
                                value={this.state.password2}
                                placeholder="请再次输入密码"
                                onChange={this.handlePassword2Change}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formTail">
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <HelpBlock>已经拥有账号,<a href="/">我要去登录！</a></HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup controlId="button">
                    <Col xs={6} xsOffset={6} md={4} mdOffset={7} lg={4} lgOffset={7}>
                        <ButtonToolbar>
                            <Button bsStyle="primary" disabled={this.state.isLoading}
                                    onClick={!this.state.isLoading ? this.submit : null } >注册</Button>
                            <Button onClick={this.clear}>重置</Button>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
});

ReactDOM.render(
    // React.createElement(loginForm, null),
    <RegisterForm/>,
    document.getElementById('content')
);




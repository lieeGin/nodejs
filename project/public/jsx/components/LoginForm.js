/**
 * Created by lieeGin on 2017/2/8.
 */
import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {loginActions} from '../actions/LoginActions';

import {
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Col,
    InputGroup,
    ButtonToolbar,
    Button,
    Glyphicon
} from 'react-bootstrap';


class LoginForm extends React.Component {

    render() {

        const {state, loginActions} = this.props

        return (
            <Form horizontal>
                <FormGroup controlId="formTitle">
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <ControlLabel>请登录</ControlLabel>
                    </Col>
                </FormGroup>

                <FormGroup controlId="userName" validationState={state.uiState.userNameValidate}>
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="user"/>
                            </InputGroup.Addon>
                            <FormControl
                                type="text"
                                name="userName"
                                value={state.data.userName}
                                placeholder="请输入账号"
                                onChange={loginActions.userNameChange}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup controlId="password" validationState={state.uiState.passwordValidate}>
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock"/>
                            </InputGroup.Addon>
                            <FormControl
                                type="password"
                                name="password"
                                value={state.data.password}
                                placeholder="请输入密码"
                                onChange={loginActions.passwordChange}
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
                <FormGroup controlId="button">
                    <Col xs={6} xsOffset={6} md={4} mdOffset={7} lg={4} lgOffset={7}>
                        <ButtonToolbar>
                            <Button bsStyle="primary" disabled={state.uiState.isLoading}
                                    onClick={() => loginActions.login()}>登录</Button>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

}


function getState(state) {
    return {
        state: state
    }
}

function buildActionDispatcher(dispatch) {
    return {
        loginActions: bindActionCreators(loginActions, dispatch)
    }
}

export default connect(getState, buildActionDispatcher)(LoginForm);


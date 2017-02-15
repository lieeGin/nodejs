/**
 * Created by lieeGin on 2017/2/13.
 */
import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {registerActions} from '../actions/registerActions';

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
    Glyphicon,
    Modal,
} from 'react-bootstrap';


class RegisterForm extends React.Component {

    render() {

        const {state, registerActions} = this.props;

        return (
            <Form horizontal>
                <FormGroup controlId="formTitle">
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <ControlLabel>请填写注册信息</ControlLabel>
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
                                onChange={registerActions.userNameChange}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                        <span style={{
                            color: 'red',
                            display: state.uiState.userNameTip
                        }}>{state.uiState.userNameTipText}</span>
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
                                onChange={registerActions.passwordChange}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                        <span style={{
                            color: 'red',
                            display: state.uiState.passwordTip
                        }}>{state.uiState.passwordTipText}</span>
                    </Col>
                </FormGroup>
                <FormGroup controlId="password2" validationState={state.uiState.password2Validate}>
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock"/>
                            </InputGroup.Addon>
                            <FormControl
                                type="password"
                                name="password2"
                                value={state.data.password2}
                                placeholder="请再次输入密码"
                                onChange={registerActions.password2Change}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                        <span style={{
                            color: 'red',
                            display: state.uiState.password2Tip
                        }}>{state.uiState.password2TipText}</span>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formTail">
                    <Col xs={8} xsOffset={2} md={4} mdOffset={4} lg={4} lgOffset={4}>
                        <HelpBlock>已经拥有账号，<a href="/">我要去登录！</a></HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup controlId="button">
                    <Col xs={6} xsOffset={6} md={4} mdOffset={7} lg={4} lgOffset={7}>
                        <ButtonToolbar>
                            <Button bsStyle="primary" disabled={state.uiState.isLoading}
                                    onClick={!state.uiState.isLoading ? registerActions.submit : null }>注册</Button>
                            <Button onClick={registerActions.clear}>重置</Button>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>

                <Modal
                    show={state.uiState.modalShow}
                    onHide={registerActions.closeModal}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">提示</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {state.uiState.modalText}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={registerActions.closeModal}>确定</Button>
                    </Modal.Footer>
                </Modal>

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
        registerActions: bindActionCreators(registerActions, dispatch)
    }
}

export default connect(getState, buildActionDispatcher)(RegisterForm);


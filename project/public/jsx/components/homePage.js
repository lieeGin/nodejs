/**
 * Created by lieeGin on 2017/2/20.
 */
import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {homeActions} from '../actions/homeActions';

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
    Grid,
    Row,
    PageHeader,
    Pager,
    Image,
    Glyphicon
} from 'react-bootstrap';


class HomePage extends React.Component {

    render() {
        const {state, homeActions} = this.props


        return (
            <div style={{height:'100%'}}>
                <PageHeader style={{textAlign: 'center'}}>真实是美好的一天!
                    <small>What a nice day.</small>
                </PageHeader>
                <Grid style={{display:state.uiState.chatListShow}}>
                    {state.data.chatList.map((chat, index) =>
                        <Row >
                            <Col xs={1} xsOffset={3} md={1} mdOffset={3} lg={1} lgOffset={3}>
                                <Image src="/images/head1.jpg" circle style={{height: '40px'}}/>
                            </Col>
                            <Col xs={3} md={3} lg={3} style={{borderBottom: '1px solid gray'}}>
                                <Col xs={10} md={10} lg={10}>
                                    <Row >
                                        <b>张三</b>
                                    </Row>
                                    <Row>
                                        <small style={{color: 'gray'}}>在干吗</small>
                                    </Row>
                                </Col>
                                <Col xs={2} md={2} lg={2} style={{textAlign: 'center'}}>
                                    15:50
                                </Col>
                            </Col>
                        </Row>
                    )}
                </Grid>
                <Grid style={{display:state.uiState.contactListShow}}>
                    {state.data.contactList.map((chat, index) =>
                        <Row >
                            <Col xs={1} xsOffset={3} md={1} mdOffset={3} lg={1} lgOffset={3}>
                                <Image src="/images/head1.jpg" circle style={{height: '40px'}}/>
                            </Col>
                            <Col xs={5} md={5} lg={5} style={{borderBottom: '1px solid gray'}}>
                                <Col xs={10} md={10} lg={10}>
                                    <Row >
                                        <b>李四</b>
                                    </Row>
                                    <Row>
                                        <small style={{color: 'gray'}}>都比一个</small>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                    )}
                </Grid>

                <Row style={{textAlign: 'center',position:'fixed',bottom:'0px',marginLeft:'30%'}}>
                    <Col xs={2} xsOffset={3} md={2} mdOffset={3} lg={2} lgOffset={3} style={{textAlign: 'center'}}>
                        消息
                    </Col>
                    <Col xs={2} md={2} lg={2} style={{textAlign: 'center'}}>
                        联系人
                    </Col>
                    <Col xs={2} md={2} lg={2} style={{textAlign: 'center'}}>
                        我
                    </Col>
                </Row>

            </div>
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
        homeActions: bindActionCreators(homeActions, dispatch)
    }
}

export default connect(getState, buildActionDispatcher)(HomePage);


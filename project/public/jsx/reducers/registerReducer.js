/**
 * Created by lieeGin on 2017/2/13.
 */
import {fromJS} from 'immutable';

const prefix = 'register/';


export default (state = {
    uiState: {
        userNameValidate: null,
        userNameTip: 'none',
        userNameTipText: '用户名长度至少大于2',
        passwordValidate: null,
        passwordTip: 'none',
        passwordTipText: '密码长度至少大于6位',
        password2Validate: null,
        password2Tip: 'none',
        password2TipText: '两次输入密码不一致',
        isLoading: false,
        modalShow: false,
        modalText: '',
    },
    data: {
        userName: '',
        password: '',
        password2: '',
    }
}, action) => {

    switch (action.type) {
        case prefix + 'REGISTER':   // 注册
            return fromJS(state).setIn(['uiState', 'isLoading'], true).toJS();
        case prefix + 'REGISTER_DONE': // 注册完成
            console.log('返回数据' + action.data);
            return fromJS(state).setIn(['uiState', 'isLoading'], false)
                .setIn(['uiState', 'modalShow'], true)
                .setIn(['uiState', 'modalText'], action.data.msg).toJS();
        case  prefix + 'CLOSE_MODAL':
            return fromJS(state).setIn(['uiState', 'modalShow'], false).toJS();
        case  prefix + 'OPEN_MODAL':
            return fromJS(state)
                .setIn(['uiState', 'modalShow'], true)
                .setIn(['uiState', 'modalText'], action.text).toJS();
        case prefix + 'CLEAR':
            return fromJS(state).setIn(['uiState', 'isLoading'], false)
                .setIn(['uiState', 'userNameValidate'], null)
                .setIn(['uiState', 'passwordValidate'], null)
                .setIn(['uiState', 'password2Validate'], null)
                .setIn(['data', 'userName'], '')
                .setIn(['data', 'password'], '')
                .setIn(['data', 'password2'], '').toJS();
        case prefix + 'USER_NAME_CHANGE':    // 监听用户名框修改
            var validate = null;
            var tip = 'none';
            var length = action.userName.length;
            if (length > 2) {
                validate = 'success';
            } else {
                tip = 'block';
                validate = 'error';
            }
            return fromJS(state)
                .setIn(['data', 'userName'], action.userName)
                .setIn(['uiState', 'userNameValidate'], validate)
                .setIn(['uiState', 'userNameTip'], tip).toJS();
        case prefix + 'PASSWORD_CHANGE':    // 监听密码框修改
            var validate = null;
            var tip = 'none';
            var length = action.password.length;
            if (length >= 6) {
                validate = 'success';
            } else {
                tip = 'block';
                validate = 'error';
            }
            return fromJS(state)
                .setIn(['data', 'password'], action.password)
                .setIn(['uiState', 'passwordValidate'], validate)
                .setIn(['uiState', 'passwordTip'], tip).toJS();
        case prefix + 'PASSWORD2_CHANGE':    // 监听密码框修改
            var validate = null;
            var tip = 'none';
            var password = fromJS(state).getIn(['data', 'password']);
            var password2 = action.password2;
            if (password == password2) {
                validate = 'success';
            } else {
                tip = 'block';
                validate = 'error';
            }
            return fromJS(state)
                .setIn(['data', 'password2'], action.password2)
                .setIn(['uiState', 'password2Validate'], validate)
                .setIn(['uiState', 'password2Tip'], tip).toJS();
        default:
            return state;
    }
};
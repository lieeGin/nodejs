/**
 * Created by lieeGin on 2017/2/8.
 */
import {fromJS} from 'immutable';

export default (state = {
    uiState: {
        userNameValidate: null,
        passwordValidate: null,
        isLoading: false
    },
    data: {
        userName: '张三',
        password: '123',
    }
}, action) => {

    switch (action.type) {
        case 'login/LOGINING':   // 登录
            return fromJS(state).setIn(['uiState', 'isLoading'], true).toJS();
        case 'login/LOGIN_DONE':   // 登录完成
            console.log('返回数据' + action.data.success + ':' + action.data.msg);
            return fromJS(state).setIn(['uiState', 'isLoading'], false).toJS();
        case 'login/CLEAR':
            return fromJS(state).setIn(['uiState', 'isLoading'], false)
                .setIn(['uiState', 'userNameValidate'], null)
                .setIn(['uiState', 'passwordValidate'], null)
                .setIn(['data', 'userName'], '')
                .setIn(['data', 'password'], '').toJS();
        case 'login/USER_NAME_CHANGE':    // 监听用户名框修改
            var validate = null;
            var length = action.userName.length;
            if (length > 2) {
                validate = 'success';
            } else {
                validate = 'error';
            }
            return fromJS(state)
                .setIn(['data', 'userName'], action.userName)
                .setIn(['uiState', 'userNameValidate'], validate).toJS();
        case 'login/PASSWORD_CHANGE':    // 监听密码框修改
            var validate = null;
            var length = action.password.length;
            if (length >= 6) {
                validate = 'success';
            } else {
                validate = 'error';
            }
            return fromJS(state)
                .setIn(['data', 'password'], action.password)
                .setIn(['uiState', 'passwordValidate'], validate).toJS();
        default:
            return state;
    }
};
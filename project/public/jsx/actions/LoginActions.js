/**
 * Created by lieeGin on 2017/2/8.
 */
import fetch from 'isomorphic-fetch';
import config from '../../../config/config';

//这是名空间，对普通action做划分
const prefix = 'login/';

export const loginActions = {

    login: () => ((dispatch, getState) => {
        var stateData = getState();
        if (stateData.uiState.userNameTip == 'block' || stateData.uiState.passwordTip == 'block') {
            return;
        }

        var submitData = new Object();
        submitData.userName = stateData.data.userName;
        submitData.password = stateData.data.password;

        dispatch(loginActions.logining());
        var aa = fetch(config.basePath + 'user/login',
            {
                credentials: 'same-origin',  // 保证请求时会带上cookie
                method: "POST",
                body: JSON.stringify(submitData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((data) => {
                dispatch(loginActions.loginDone(data));
                if(data.success){
                    // 跳转
                    console.log('登录成功');
                    location.href='/home';
                }
            })
            .catch((e) => {
                var d = new Object();
                d.success = false;
                dispatch(loginActions.loginDone(d));
            });

    }),
    logining: () => ({
        type: prefix + 'LOGINING'
    }),
    loginDone: (data) => ({
        type: prefix + 'LOGIN_DONE',
        data: data
    }),
    clear: () => ({
        type: prefix + 'CLEAR'
    }),
    userNameChange: (e) => ({
        type: prefix + 'USER_NAME_CHANGE',
        userName: e.target.value
    }),
    passwordChange: (e) => ({
        type: prefix + 'PASSWORD_CHANGE',
        password: e.target.value
    })
}


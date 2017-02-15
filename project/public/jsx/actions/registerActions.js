/**
 * Created by lieeGin on 2017/2/13.
 */
import fetch from 'isomorphic-fetch';
import config from '../../../config/config';

//这是名空间，对普通action做划分
const prefix = 'register/';

export const registerActions = {

    register: () => ({
        type: prefix + 'REGISTER'
    }),
    registerDone: (data) => ({
        type: prefix + 'REGISTER_DONE',
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
    }),
    password2Change: (e) => ({
        type: prefix + 'PASSWORD2_CHANGE',
        password2: e.target.value
    }),
    closeModal: () => ({
        type: prefix + 'CLOSE_MODAL'
    }),
    openModal: (text) => ({
        type: prefix + 'OPEN_MODAL',
        text: text
    }),
    submit: () => ((dispatch, getState) => {
        var stateData = getState();
        if (stateData.uiState.userNameTip == 'block' || stateData.uiState.passwordTip == 'block' || stateData.uiState.password2Tip == 'block') {
            return;
        }

        var submitData = new Object();
        submitData.userName = stateData.data.userName;
        submitData.password = stateData.data.password;

        dispatch(registerActions.register());
        var aa = fetch(config.basePath + 'user/register',
            {
                method: "POST",
                body: JSON.stringify(submitData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((data) => {
                dispatch(registerActions.registerDone(data));
            })
            .catch((e) => {
                var d = new Object();
                d.success = false;
                dispatch(registerActions.registerDone(d));
            });

    })
}


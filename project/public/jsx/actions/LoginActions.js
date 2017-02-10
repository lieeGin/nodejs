/**
 * Created by lieeGin on 2017/2/8.
 */
//这是名空间，对普通action做划分
const prefix = 'login/';

export const loginActions = {

    login: (loginInfo) => ({
        type: prefix+'LOGIN',
        loginData : loginInfo
    }),
    userNameChange : (e)=>({
        type: prefix+'USER_NAME_CHANGE',
        userName:  e.target.value
    }),
    passwordChange :(e)=>({
        type: prefix+'PASSWORD_CHANGE',
        password:  e.target.value
    })
}


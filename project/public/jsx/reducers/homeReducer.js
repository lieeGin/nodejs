/**
 * Created by lieeGin on 2017/2/20.
 */
import {fromJS} from 'immutable';


const prefix = 'home/';

export default (state = {
    uiState: {
        chatListShow:'block',   // 聊天列表是否显示
        contactListShow:'none',   // 所有联系人是否显示
        isLoading: false
    },
    data: {
        chatList:[{'id':1111}],    // 最近聊天列表
        contactList:[{'id':222}],    // 所有联系人列表
    }
}, action) => {

    switch (action.type) {
        case prefix + 'CHANGE_PAGE':
            return fromJS(state).setIn(['uiState', 'isLoading'], true).toJS();
        default:
            return state;
    }
};
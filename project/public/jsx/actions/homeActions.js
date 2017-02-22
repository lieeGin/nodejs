/**
 * Created by lieeGin on 2017/2/20.
 */
import fetch from 'isomorphic-fetch';
import config from '../../../config/config';

//这是名空间，对普通action做划分
const prefix = 'home/';

export const homeActions = {

    changePage: (page) => ({
        type: prefix + 'CHANGE_PAGE',
        page: page
    })
}


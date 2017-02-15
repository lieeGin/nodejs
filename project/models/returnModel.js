/**
 * Created by lieeGin on 2017/2/15.
 */
class ReturnModel {

    constructor(success, msg, data) {
        this.success = success;
        this.msg = msg;
        this.data = data;
    }

    toString() {
        return '(' + this.success + ', ' + this.msg + ', ' + this.data + ')';
    }

}

module.exports = ReturnModel;
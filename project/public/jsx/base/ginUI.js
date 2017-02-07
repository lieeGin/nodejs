/**
 * Created by lieeGin on 2017/2/6.
 */
var React = require('react');
var ReactDOM = require('react-dom');


var GinInput = React.createClass({
    getInitialState: function() {
        return {value: this.props.type=='password'? '':(this.props.value || '请输入')};
    },
    render: function () {
        var value = this.state.value;
        return (
            <div>
                <label>{this.props.label}:</label>
                <input type={this.props.type} name={this.props.name} defaultValue={value} onChange={this.props.onChangeMethod} />
            </div>
        );
    }
});


var GinButton = React.createClass({
    render: function () {
        return (
            <div>
                <button onClick={this.props.buttonClickMethod} id={this.props.id} name={this.props.name}>{this.props.text}</button>
            </div>
        );
    }
});

var GinForm = React.createClass({displayName: 'Form',
    //文本框的点击事件
    textOnChange: function (e) {
        console.log('文本信息发生变化');
        //TODO 处理相关验证任务

    },
    onSubmit: function(e){
        console.log('onSubmit被点击了');
    },
    //a标签的点击事件
    aHrefClick: function () {
        console.log('a标签被点击');
    },

    render: function() {
        return (
            <from>
                <h1>登录</h1>
                <GinInput label = '用户名' type='text'  name='userName' onChangeMethod={this.textOnChange}/>
                <GinInput label = '密码' type='password' name='password' onChangeMethod={this.textOnChange}/>
                <GinButton name='submit' buttonClickMethod={this.onSubmit} text='提交'/>
            </from>
        );
    }
});

ReactDOM.render(
    React.createElement(GinForm, null),
    document.getElementById('content')
);
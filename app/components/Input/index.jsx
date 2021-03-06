import React from 'react'

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <input 
                    style={{width: '100%', height: '40px', fontSize: '35px'}} 
                    value={this.state.value} 
                    onChange={this.changeHandler.bind(this)} 
                    onKeyUp={this.keyUpHandler.bind(this)}
                />
            </div>
        )
    }
    changeHandler(e) {
        // 实时同步数据
        this.setState({value: e.target.value})
    }
    keyUpHandler(e) {
        const value = this.state.value;
        // 按键回车，不为空的场合
        if (e.keyCode == 13 && value.trim()) {
            // 提交操作
            this.props.submitFunc(value);
            this.setState({value: ''})
        }
    }
}

export default Input
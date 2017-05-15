import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            todos: [] 
        };
    }
    render() {
        return (
            <div>
                <Input submitFunc={this.submitFunc.bind(this)}/>
                <List 
                    todos={this.state.todos} 
                    deleteFunc={this.deleteFunc.bind(this)}/>
            </div>
        )
    }
    submitFunc(value) {
        const id = this.state.todos.length;
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        });
    }
    deleteFunc(id) {
        this.setState({
            todos: this.state.todos.filter(item =>{
                if (item.id !== id) {
                    return item;
                }
            })
        });
    }
}

export default Todo
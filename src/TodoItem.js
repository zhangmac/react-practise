import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
          return (
           <div className="TodoItem">
              <input type='checkbox' checked={this.props.todo.status==='compeleted'}
               onChange={this.toggle.bind(this)}/>
               <span className="title">{this.props.todo.title}</span>
               <button onClick={this.delete.bind(this)}>删除</button>
            </div>  
          )  
    }
    toggle(e) {
        this.props.onToggle(e,this.props.todo)
    }
    delete(e) {
        this.props.onDeleted(e,this.props.todo)
    }
}
export default TodoItem 
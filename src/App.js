import React, { Component } from 'react'
import './App.css'
import 'normalize.css'
import './reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      newTodo:"test",
      todoList:[
        {id:1,title:"我的待办事项1"},
        {id:2,title:"我的待办事项2"}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
          <li><TodoItem todo={item.title}/></li>
       )
    })
    return(
    <div className="App">
        <h1>My projects</h1>
      <div className="inputWrapper">
        <TodoInput content={this.state.newTodo}/>
      </div>
      <ol>
      {todos}
    </ol>
    </div>
    ) 
  }
}

export default App;

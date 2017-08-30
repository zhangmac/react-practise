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
      newTodo:" ",
      todoList:[
        {id:1,title:"我的待办事项1"},
        {id:2,title:"我的待办事项2"}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
          <li key={index}><TodoItem todo={item.title}/></li>
       )
    })
    return(
    <div className="App">
        <h1>My projects</h1>
      <div className="inputWrapper">
        <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)}/>
      </div>
      <ol>
      {todos}
    </ol>
    </div>
    ) 
  }
  addTodo(e) {
    this.state.todoList.unshift({
      id:idMaker(),
      title:e.target.value,
      status:null,
      deleted:false
    })
    this.setState ({
      newTodo:" ",
      todoList:this.state.todoList
    })
    let id=0
    function idMaker() {
      id+=1
      return id
    }
  }
}

export default App;

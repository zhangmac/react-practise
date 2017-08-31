import React, { Component } from 'react'
import './App.css'
import 'normalize.css'
import './reset.css'
import './TodoItem.css'
import './TodoInput.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import UserDialog from './UserDialog'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      newTodo:" ",
      todoList: []
    }
  }
  render() {
    let todos = this.state.todoList.filter((item)=>!item.deleted).map((item,index)=>{
      return (
          <li key={index}><TodoItem todo={item} onToggle={this.toggle.bind(this)}
                           onDeleted={this.delete.bind(this)}/></li>
       )
    })
    return(
    <div className="App">
        <h1>待办事项</h1>
      <div className="inputWrapper">
        <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}/>
      </div>
      <ol className="todoList">
      {todos}
    </ol>
     <UserDialog />
    </div>
    ) 
  }

  ComponentDidUpdate() {
   
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

  changeTitle(e) {
    this.setState ({
      newTodo:e.target.value,
      todoList:this.state.todoList
    })
  }

  toggle(e,todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }

  delete(e,todo) {
    todo.deleted=true
    this.setState(this.state)
  }
}

export default App;

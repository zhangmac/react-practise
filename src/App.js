import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      newTodo:"test",
      todoList:[
        {id:1,title:"go to winterfell"}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return <li>{item.title}</li>
    })
    return(
    <div className="App">
        <h1>My projects</h1>
      <div className="inputWrapper">
        <input content={this.state.newTodo}/>
      </div>
      <ol>
      {todos}
    </ol>
    </div>
    ) 
  }
}

export default App;

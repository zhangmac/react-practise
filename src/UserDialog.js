import React,{Component} from 'react' 
import './UserDailog.css'
import {signUp} from './leanCloud'

class UserDialog extends Component {
    constructor(props) {
        super(props)
        this.state={
            selected:"signUp",
            formData:{
                username:"",
                password:""
            }
        }
    }

    switch(e) {
        this.setState({
            selected:e.target.value
        })
    }

    signUp(e){
        e.preventDefault()
        let {username, password} = this.state.formData
        let success = (user)=>{
          console.log(user)
        }
        let error = (error)=>{
          console.log(error)
        }
        signUp(username, password, success, error)
    }
    signIn(e){}

    changeFormData(key,e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.formData[key] = e.target.value
        this.setState(stateCopy)
    }

    render() {
    let signUpForm = (
          <form className="signUp" onSubmit={this.signUp.bind(this)}> {/* 注册*/}
            <div className="row">
              <label>用户名</label> 
              <input type="text" value={this.state.formData.username} onChange={this.changeFormData.bind(this,'username')}/>
            </div>
            <div className="row">
              <label>密码</label>
              <input type="password" value={this.state.formData.password} onChange={this.changeFormData.bind(this,'password')}/>
            </div>
            <div className="row actions">
              <button type="submit">注册</button>
            </div>
          </form>
    )
    let signInForm = (
          <form className="signIn" onSubmit={this.signIn.bind(this)}> {/* 登录*/}
            <div className="row">
              <label>用户名</label>
              <input type="text" value={this.state.formData.username} onChange={this.changeFormData.bind(this,'username')}/>
            </div>
            <div className="row">
              <label>密码</label>
              <input type="password" value={this.state.formData.password} onChange={this.changeFormData.bind(this,'password')}/>
            </div>
            <div className="row actions">
              <button type="submit">登录</button>
            </div>
        </form>
    ) 
        return (
            <div className="userdialog-wrapper">
                <div className="userdialog">
                    <nav onChange={this.switch.bind(this)}> 
                        <label><input type="radio" value="signUp" checked={this.state.selected === 'signUp'} /> 注册</label>
                        <label><input type="radio" value="signIn" checked={this.state.selected === 'signIn'}/> 登录  </label>                      
                    </nav>
                    <div className="panel">
                     {this.state.selected === "signUp" ? signUpForm : null}
                     {this.state.selected === 'signIn' ? signInForm : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default UserDialog
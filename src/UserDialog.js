import React,{Component} from 'react' 
import './UserDailog.css'

class UserDialog extends Component {
    render() {
        return (
            <div className="userdialog-wrapper">
                <div className="userdialog">
                    <nav>
                        <input type="radio" /> 注册
                        <input type="radio" /> 登录                        
                    </nav>
                    <div className="panel">
                        <form className="sign-up">
                            <div className="row">
                                <label>用户名</label>
                                <input type="text" />
                            </div>
                            <div className="row">
                                <label>密码</label>
                                <input type="password" />
                            </div>
                            <div className="row actions">
                                <button type="submit">注册</button>
                            </div>
                        </form>
                        <form className="sign-in">
                            <div className="row">
                                <label>用户名</label>
                                <input type="text" />
                            </div>
                            <div className="row">
                                <label>密码</label>
                                <input type="password" />
                            </div>
                            <div className="row actions">
                                <button type="submit">登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserDialog
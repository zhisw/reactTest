import React from 'react';
import './login.css'
class Login extends React.Component {
  constructor (props) {
    super ( props )
    this.state = {
      loginName:'',
      passWord:''
    }
  }
  changeLoginName (e) {
    console.log(e.target.value)
    this.setState({
      loginName:e.target.value
    })
  }
  changePassWord (e) {
    console.log(e)
    this.setState({
      passWord:e.target.value
    })
  }
  submitLoginInfo () {
    console.log(this.props.history)
    if (!this.state.loginName||!this.state.passWord) {
      alert('登录名密码不能为空')
      return ;
    }
    if (this.state.loginName!='zhisw') {
      alert('你的名字输错了！')
      return 
    }
    if (this.state.passWord!='123456') {
      alert('你的密码输错了')
      return ;
    }
    this.props.history.push({pathname: '/list'})
  }
  render () {
    return (
      <div className="LoginBox">
        <div className="loginTitle">
          <h2>登录</h2>  
        </div>
        <div className="loginName">
          <label>账户名：</label> 
          <input type="text" onChange={(e)=> this.changeLoginName(e)}/> 
        </div>
        <div className="passWord">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>   
          <input type="passWord" onChange={(e)=> this.changePassWord(e)}/> 
        </div>
        <div className="loginBtnBox">
          <span className="loginBtn" onClick={()=>this.submitLoginInfo()}>确定</span>  
        </div>
      </div>
    )
  }
}

export default Login
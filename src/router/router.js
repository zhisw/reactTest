import React from 'react'
import App from '../App'
import { BrowserRouter as Router, Route,Switch,NavLink,Prompt,Redirect } from 'react-router-dom'
import login from '../compontents/login/index'
import list from '../compontents/contentList/index'
const  routersList= () =>{
  return (
    <App>
      <Router>
        {/* <ul>
          <li><NavLink  to="/home" activeStyle={activeStyle}>Home</NavLink></li>
          <li><NavLink  to="/list" activeStyle={activeStyle}>List</NavLink></li>
        </ul> */}
        {/* <Prompt when={true} message="你确定要离开当前页面吗？" /> */}
        <Switch>
          <Route exact path="/" component={login}></Route>
          <Route exact path="/home" component={login}></Route>
          <Route  path="/list" component={list}></Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
      </App>
  )
} 
export default routersList
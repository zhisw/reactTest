import React from 'react';
import {NavLink} from 'react-router-dom'
import './navList.css'
class NavList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'red'
    }; 
    return (
      <ul>
          <li><NavLink  to="/home" activeStyle={activeStyle}>Home</NavLink></li>
          <li><NavLink  to="/list" activeStyle={activeStyle}>List</NavLink></li>
      </ul> 
    )
  }
}
export default NavList
import React from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render() {
  return (
    <div className="App"> 
      {this.props.children}
    </div>
  )     
}
}

export default App;

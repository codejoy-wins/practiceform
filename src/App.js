import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      firstName: "",
      lastName: "",
      theme: "",
      area: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div className="App">
        <h1 className={this.state.theme}>{this.state.area === "" ? "Who are you?" : "On my way ;)"}</h1>
        <form>
          <input className="input" name="firstName" onChange={this.handleChange} type="text" placeholder="First Name"/> 
          <input className="input" name="lastName" onChange={this.handleChange} type="text" placeholder="Last Name"/>
          <select name="theme" onChange={this.handleChange}>
            <option value="">--Select Theme--</option>
            <option value="bubblegum">Bubblegum</option>
            <option value="plum">Plum Tree</option>
            <option value="peaches">Peaches and Cream</option>
          </select><br></br>
          <textarea placeholder="Address" onChange={this.handleChange} name="area" rows="12" cols="52"/>
        </form>
        <div>
        <p className={this.state.theme}>{this.state.firstName} {this.state.lastName}</p>
        <p className={this.state.theme}>{this.state.area}</p>
        </div>
        <footer>
          <a href="https://maxjann.com">Jann Software</a>
        </footer>
      </div>
    )
  }
  
}

export default App;

import React, { Component } from 'react';

class Registration extends Component {

  constructor(){
    super();
    this.state = {
      newUser: {}
    }
  }  

  handleSubmit(e) {
    console.log(this.refs.username.value + " submitted...sort of...with a pw of " + this.refs.password.value)
    //console.log("")
    if (this.refs.username.value === ''){
      alert('Username is required');
    } else {
      this.setState({newUser: {
        username: this.refs.username.value,
        password: this.refs.password.value
      }
    }, function(){
        console.log(this.state)
      })
    }
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <h3>Register for Radical Kanji</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Username</label><br />
            <input type="text" ref="username" />
          </div>
          <div>
            <label>Password</label><br />
            <input type="password" ref="" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Registration;
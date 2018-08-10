import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password){
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            value={this.state.username} onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password} onChange={this.updatePassword}/>
          </label>
        </div>
        <div>
          <button type="submit"
            >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

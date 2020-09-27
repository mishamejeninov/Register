import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      password: "",
      confirmPassword: ""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.PasswordChange = this.PasswordChange.bind(this);
  }

  onChangeName(event) {
    this.setState({ input: event.target.value });
  }

  enterPassword(event) {
    this.setState({ password: event.target.value });
  }

  PasswordChange(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  handleSubmit = () => {
    const { input } = this.state;
    alert(`Welcome ${input} You have successfully registered`);
  };

  render() {
    const { password, confirmPassword } = this.state;
    const enabled = password.length > 0 && confirmPassword.length > 0;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>
          {this.state.input && "Hey"} {this.state.input}
        </h1>

        <input
          type="text"
          placeholder="Username"
          onChange={this.onChangeName}
        />

        <input
          type="password"
          placeholder="Password"
          maxLength="8"
          value={this.state.password}
          onChange={this.enterPassword}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          maxLength="8"
          value={this.state.confirmPassword}
          onChange={this.PasswordChange}
          disabled={!this.state.password}
        />
        <button disabled={!enabled}>Register</button>
      </form>
    );
  }
}
export default Form;

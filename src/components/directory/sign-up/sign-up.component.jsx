import React from "react";
import FormInput from "../form-input/form-input.component";
import CUstomButton from "../custom-button/custom-button.component";
import { auth, createUserprofileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.css";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      dislayName: "",
      email: "",
      password: "",
      consfirmPassword: ""
    };
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have a account</h2>
        <span> Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import RegistrationForm from './registration_form';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-page">
        <h1>Please enter your email!</h1>
        <RegistrationForm />
      </div>
    );
  }
}

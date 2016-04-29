import React, { Component } from 'react';
import RegistrationForm from './registration_form';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-page">
        <h1>Huffington Post Code Challenge</h1>
        <RegistrationForm />
      </div>
    );
  }
}

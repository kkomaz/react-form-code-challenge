import React, { Component } from 'react';
import RegistrationForm from './registration_form';

export default class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <h1>Huffington Post Code Challenge</h1>
        <RegistrationForm />
      </div>
    );
  }
}

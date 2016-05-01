import React, { Component } from 'react';
import RegistrationForm from './registration_form';

export default class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="newsletter__register">
          <RegistrationForm />
        </div>
      </div>
    );
  }
}

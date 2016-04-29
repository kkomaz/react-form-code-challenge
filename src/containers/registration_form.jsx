import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerEmail } from '../actions/index';

const { func } = React.PropTypes;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onBlurChange = this.onBlurChange.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();

    this.props.registerEmail(this.state);
    this.setState({ email: '', buttonSubmit: 'inactive' });
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onBlurChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  renderSubmit() {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      return <button type="submit" disabled="disabled" className="button button--inactive">Submit</button>;
    } else {
      return <button type="submit" className="button button--active">Submit</button>;
    }
  }

  render() {
    return (
      <div className="registration-page">
        <form className="registration-form" onSubmit={this.onFormSubmit}>
          <label className="registration-form__email-label">Email</label>

        <input
          type="text"
          className="registration-form__email-input"
          onChange={this.onInputChange}
          onBlur={this.onBlurChange}
          id="email"
          value={this.state.email}
        />

        <div className="registration-form__submit">
            {this.renderSubmit()}
        </div>
        </form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  registerEmail: func,
};

function mapStateToProps(state) {
  return {
    response: state.RegistrationFormReducer.response,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerEmail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

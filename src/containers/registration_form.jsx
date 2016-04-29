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
  }
  onFormSubmit(event) {
    event.preventDefault();

    this.props.registerEmail(this.state);
    this.setState({ email: '' });
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
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
          id="email"
        />

        <div className="registration-form__submit">
            <button type="submit" className="button button--active">Submit</button>
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

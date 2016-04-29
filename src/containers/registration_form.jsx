import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerEmail } from '../actions/index';

const { func, obj } = React.PropTypes;

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
    this.setState({ email: '' });
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onBlurChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  renderSubmitButton() {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      return <button type="submit" className="button button--inactive">Submit</button>;
    }

    return <button type="submit" className="button button--active">Submit</button>;
  }

  renderErrors() {
    const { response } = this.props;

    return response.data.errors.map((error) => {
      return <li>{error}</li>;
    });
  }

  renderResponse() {
    const { response } = this.props;

    if (response.status && response.status === 201) {
      return <p>Thank you for subscribing!  You should receieve an email shortly!</p>;
    }

    if (response.status) {
      let errors = this.renderErrors();
      return <ul>{errors}</ul>;
    }

    return null;
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
          {this.renderSubmitButton()}
        </div>
        </form>

        {this.renderResponse()}
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  registerEmail: func,
  response: obj,
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

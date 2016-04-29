import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerEmail } from '../actions/index';

import LoadingPlaceholder from '../components/loading_placeholder/loading_placeholder';

const { func, object } = React.PropTypes;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', inProgress: false };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeOverlay = this.removeOverlay.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.registerEmail(this.state);
    this.setState({ email: '', inProgress: true });
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  removeOverlay() {
    this.setState({ inProgress: false });
  }

  renderSubmitButton() {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      return <button type="submit" className="button button--inactive">Submit</button>;
    }

    return <button type="submit" className="button button--active">Submit</button>;
  }

  render() {
    return (
      <div className="registration-page">
        <LoadingPlaceholder
          inProgress={this.state.inProgress}
          removeOverlay={this.removeOverlay}
          response={this.props.response}
        />

        <form className="registration-form" onSubmit={this.onFormSubmit}>
          <label className="registration-form__email-label">Email</label>

          <input
            type="text"
            className="registration-form__email-input"
            onChange={this.onInputChange}
            value={this.state.email}
            id="email"
          />

          <div className="registration-form__submit">
            {this.renderSubmitButton()}
          </div>
        </form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  registerEmail: func,
  response: object,
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

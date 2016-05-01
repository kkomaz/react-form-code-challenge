import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerEmail } from '../actions/index';

import LoadingPlaceholder from '../components/loading_placeholder/loading_placeholder';

const { func, object } = React.PropTypes;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', inProgress: false, page: 'newsletter' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeOverlay = this.removeOverlay.bind(this);
  }

  /**
   * Submit Form via registerEmail action function and reset state
   * @param [event] - click
   */
  onFormSubmit(event) {
    event.preventDefault();
    this.props.registerEmail(this.state);
    this.setState({ email: '', inProgress: true });
  }

  /**
   * Update state on input change
   * @param [event] - inputChange
   */
  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * generate props for overlay loader
   * @return [object] - overlay loader props
   */
  getLoaderProps() {
    const { response } = this.props;
    const { inProgress, page } = this.state;

    return {
      response,
      inProgress,
      page,
      removeOverlay: this.removeOverlay,
    };
  }

  /**
   * removeOverlay loader on click via state change.
   */
  removeOverlay() {
    this.setState({ inProgress: false });
  }

  /**
   * Show disabled or enabled submit button via state of email
   * @return [element] - button element
   */
  renderSubmitButton() {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      return <button type="submit" className="button button--inactive" disabled="disabled">Submit</button>;
    }

    return <button type="submit" className="button button--active">Submit</button>;
  }

  render() {
    return (
      <form className="newsletter__registration-form" onSubmit={this.onFormSubmit}>
        <h2>Get Huffington Post News, and more info, delivered to your inbox!</h2>

        <LoadingPlaceholder { ...this.getLoaderProps() } />

        <input
          type="text"
          className="newsletter__email-input"
          onChange={this.onInputChange}
          value={this.state.email}
          placeholder="Email"
          id="email"
        />

        <div className="newsletter__form-submit">
          {this.renderSubmitButton()}
        </div>
      </form>
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

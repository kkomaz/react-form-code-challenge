import React from 'react';
import Header from './header/header';

const { object } = React.PropTypes;

export default class App extends React.Component {
  static propTypes = {
    children: object,
  }

  render() {
    return (
      <div className="app-component">
        <div className="logo"></div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

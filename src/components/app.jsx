import React from 'react';

const { object } = React.PropTypes;

export default class App extends React.Component {
  static propTypes = {
    children: object,
  }

  render() {
    return (
      <div className="app-component">
        {this.props.children}
      </div>
    );
  }
}

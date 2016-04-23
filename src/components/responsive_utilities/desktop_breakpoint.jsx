import React from 'react';
import Breakpoint from './breakpoint';

const { object } = React.PropTypes;

export default function DesktopBreakpoint(props) {
  return (
    <Breakpoint {...props} name="desktop">
      {props.children}
    </Breakpoint>
  );
}

DesktopBreakpoint.propTypes = {
  children: object,
};

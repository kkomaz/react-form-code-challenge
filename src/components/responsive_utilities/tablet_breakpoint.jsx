import React from 'react';
import Breakpoint from './breakpoint';

const { object } = React.PropTypes;

export default function TabletBreakpoint(props) {
  return (
    <Breakpoint {...props} name="tablet">
      {props.children}
    </Breakpoint>
  );
}

TabletBreakpoint.propTypes = {
  children: object,
};

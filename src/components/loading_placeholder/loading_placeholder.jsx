import React from 'react';
import ResponseNotification from '../response_notification/response_notification';

const { object, bool, func } = React.PropTypes;

export default function LoadingPlaceholder(props) {
  if (props.inProgress) {
    return (
      <div className="overlay loading-placeholder">
        <div className="loading"></div>

        <ResponseNotification {...generateResponseProp(props)} />

        <button className="remove" onClick={props.removeOverlay}></button>
      </div>
    );
  }
  return null;
}

function generateResponseProp(props) {
  const { response, page } = props;
  return {
    response,
    page,
  };
}

LoadingPlaceholder.propTypes = {
  response: object,
  inProgress: bool,
  removeOverlay: func,
};

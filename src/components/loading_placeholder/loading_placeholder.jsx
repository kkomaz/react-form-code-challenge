import React from 'react';

const { bool, func } = React.PropTypes;

export default function LoadingPlaceholder(props) {
  if (props.inProgress) {
    return (
      <div className="overlay loading-placeholder">
        <div className="loading"></div>

        {renderResponse(props.response)}

        <button className="remove" onClick={props.removeOverlay}></button>
      </div>
    );
  }
  return null;
}

function renderErrors(props) {
  return response.data.errors.map((error) => {
    return <li key={error}>{error}</li>;
  });
}

function renderResponse(response) {
  if (response.status && response.status === 201) {
    return <p>Thank you for subscribing!  You should receieve an email shortly!</p>;
  }

  if (response.status) {
    let errors = renderErrors(response);
    return <ul>{errors}</ul>;
  }

  return null;
}

LoadingPlaceholder.propTypes = {
  inProgress: bool,
  removeOverlay: func,
};

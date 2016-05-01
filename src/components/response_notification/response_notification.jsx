import React from 'react';

const { object, string } = React.PropTypes;

export default function ResponseNotification(props) {
  return (
    <div>
      {renderResponse(props.response, props.page)}
    </div>
  );
}

/**
 * render error if unsucessful api request
 * @param [obj] - response fail via POST API request
 * @return [element] - list of errors
 */
function renderErrors(response) {
  return response.data.errors.map((error) => {
    return <li className="error" key={error}>{error}</li>;
  });
}

/**
 * render error if unsucessful api request
 * @param [obj] - response success via POST API request
 * @param [String] - unique success response via page type.. ie. newsletter, blogs, advertisement
 * @return [element] - Success response element
 */
function renderResponse(response, page) {
  if (response.status && response.status === 201 && page === 'newsletter') {
    return <h3>Thank you for subscribing!  You should receieve an email shortly!</h3>;
  }

  if (response.status) {
    let errors = renderErrors(response);
    return <ul className="errors">{errors}</ul>;
  }

  return null;
}

ResponseNotification.propTypes = {
  page: string,
  response: object,
};

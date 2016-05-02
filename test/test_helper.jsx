import React from 'react';
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

/**
 * Create a fake DOM created by jsdom library
 */
global.document = jsdom.jsdom('<!doctype html><html?<body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator; // add global.navigator
/**
 * Create an instance of jquery using the fake DOM created by jsdom library
 */
const $ = _$(global.window);

/**
 * Render a Component
 * @param {Object} ComponentClass - The Component you want to render
 * @param {Object} props - component level props
 * @param {Object} state - application state
 * @return {jQuery DOM} - creates Component via HTML
 */
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass { ...props } />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

/**
 * Every jquery instance you create will have access to simulate function
 * @param { String} eventName - event type name i.e. change, mousedown, etc
 * @param { String } value - value of the change
 * @return {[type]} [description]
 */
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// Setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };

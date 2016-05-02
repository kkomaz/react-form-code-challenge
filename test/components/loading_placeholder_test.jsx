import { renderComponent, expect } from '../test_helper';
import LoadingPlaceholder from '../../src/components/loading_placeholder/loading_placeholder';

/*eslint-disable */
describe('LoadingPlaceholder', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(LoadingPlaceholder);
  });

  it('does not render the parent div on inital load', () => {
    expect(component).to.not.have.class('loading-placeholder');
  });
});

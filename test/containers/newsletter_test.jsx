import { renderComponent, expect } from '../test_helper';
import Newsletter from '../../src/containers/newsletter';

/*eslint-disable */
describe('Newsletter', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Newsletter);
  });

  it('renders the parent div', () => {
    expect(component).to.have.class('newsletter');
  });

  it('shows newsletter registration form', () => {
    expect(component.find('.newsletter__registration-form')).to.exist;
  });
});

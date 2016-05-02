import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

/*eslint-disable */
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders the parent div', () => {
    expect(component).to.have.class('app-component');
  });

  it('shows the header component', () => {
    expect(component.find('.header')).to.exist;
  });

  it('shows the logo', () => {
    expect(component.find('.logo')).to.exist;
  });
});

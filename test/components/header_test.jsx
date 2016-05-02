import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header/header';

/*eslint-disable */
describe('Header', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('renders the parent div', () => {
    expect(component).to.have.class('header');
  });

  it('has a total of 5 links in nav', () => {
    expect(component.find('.header__link')).to.have.length.of(5);
  });
});

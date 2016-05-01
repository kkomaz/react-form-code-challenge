import { renderComponent, expect } from '../test_helper';
import Newsletter from '../../src/containers/newsletter';

describe('Newsletter', () => {
  it('renders the parent div', () => {
    let component = renderComponent(Newsletter);
    expect(component).to.have.class('newsletter');
  });
});

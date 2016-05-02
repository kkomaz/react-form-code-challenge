import { renderComponent, expect } from '../test_helper';
import RegistrationForm from '../../src/containers/registration_form';

/*eslint-disable */
describe('RegistrationForm', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(RegistrationForm);
  });

  it('renders the parent div', () => {
    expect(component).to.have.class('newsletter__registration-form');
  });

  it('has a input for email reg', () => {
    expect(component.find('.newsletter__email-input')).to.exist;
  });

  it('has a submit button for email reg', () => {
    expect(component.find('.newsletter__form-submit')).to.exist;
  });

  it('has the button disabled on initial load', () => {
    expect(component.find('.button--inactive')).to.exist;
    expect(component.find('.button--active')).to.not.exist;
  })

  describe('entering into the text input', () => {
    it('shows text that is entered', () => {
      component.find('.newsletter__email-input').simulate('change', 'leeajl006@gmail.com');
      expect(component.find('.newsletter__email-input')).to.have.value('leeajl006@gmail.com');
    });

    it('renders active button with proper email', () => {
      component.find('.newsletter__email-input').simulate('change', 'leeajl006@gmail.com');
      expect(component.find('.button--active')).to.exist;
    });

    it('renders inactive button with bad email', () => {
      component.find('.newsletter__email-input').simulate('change', 'leeajl006');
      expect(component.find('.button--inactive')).to.exist;
    });
  });
});

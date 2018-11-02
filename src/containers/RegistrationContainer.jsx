import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Registration } from '../components/Registration';

import { createFormValidator } from '../utils/formValidators';

class RegistrationContainer extends PureComponent {
  validateForm = values => createFormValidator({
    email: { isRequired: true },
    pass: { isRequired: true },
    inputValues: values
  });

  formSubmit = (values) => {
    const message = `данные имя = ${values.userName}, email = ${values.userEmail} и  пароль 
    ${values.userPass} идут на сервер`;
    console.log(message);
  };

  render() {
    const formInitValues = {
      userName: '',
      userEmail: '',
      userPass: ''
    };
    return (
      <Formik
        initialValues={formInitValues}
        validate={this.validateForm}
        onSubmit={this.formSubmit}
        render={props => <Registration {...props} />}
      />
    );
  }
}

RegistrationContainer.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
};

RegistrationContainer.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false,
  handleSubmit: () => false
};

export { RegistrationContainer };

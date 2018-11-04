import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Registration } from '../components/Registration';

import { RegistrationSchema } from '../utils/schemeValidators';

class RegistrationContainer extends PureComponent {
  formSubmit = (values, { resetForm }) => {
    const message = `данные: имя = ${values.userName}, email = ${values.userEmail} и  пароль 
    ${values.userPass} идут на сервер`;
    resetForm();
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
        validationSchema={RegistrationSchema}
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

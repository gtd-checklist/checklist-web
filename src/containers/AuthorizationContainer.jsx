import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Authorization } from '../components/Authorization';

import { AuthorizationSchema } from '../utils/schemeValidators';

class AuthorizationContainer extends PureComponent {
  formSubmit = (values, { setStatus, resetForm }) => {
    if (values.userEmail !== 'user@user.by' || values.userPass !== '123') {
      setStatus({ errorMessage: 'Введен неверный логин или пароль' });
    } else {
      setStatus({ errorMessage: '' });
      resetForm();
    }
  };

  render() {
    const formInitValues = {
      userEmail: '',
      userPass: ''
    };
    return (
      <Formik
        initialValues={formInitValues}
        validationSchema={AuthorizationSchema}
        onSubmit={this.formSubmit}
        render={props => <Authorization {...props} />}
      />
    );
  }
}

AuthorizationContainer.propTypes = {
  status: PropTypes.instanceOf(Object),
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
};

AuthorizationContainer.defaultProps = {
  status: {},
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false,
  handleSubmit: () => false
};

export { AuthorizationContainer };

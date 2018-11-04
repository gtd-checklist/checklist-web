import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Authorization } from '../components/Authorization';

import { AuthorizationSchema } from '../utils/schemeValidators';

class AuthorizationContainer extends PureComponent {
  formSubmit = (values, actions) => {
    if (values.userEmail !== 'user@user.by' || values.userPass !== '123') {
      actions.setStatus({ errorMessage: 'Введен неверный логин или пароль' });
    } else {
      actions.setStatus({ errorMessage: '' });
      console.log('переход на главную страницу');
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

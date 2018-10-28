import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { UserRegister } from '../components/Registration';

import { emailValidator, passwordValidator } from '../utils/formValidators';

const validateForm = values => ({
  userEmail: emailValidator(values.userEmail, true),
  userPass: passwordValidator(values.userPass, true)
});

const formSubmit = (values) => {
  const message = `данные имя = ${values.userName}, email = ${values.userEmail} и  пароль ${
    values.userPass
  } идут на сервер`;
  console.log(message);
};

class RegistrationContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const formInitValues = {
      userName: '',
      userEmail: '',
      userPass: ''
    };

    return (
      <Formik
        initialValues={formInitValues}
        validate={validateForm}
        onSubmit={formSubmit}
        render={props => <UserRegister {...props} />}
      />
    );
  }
}

RegistrationContainer.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

RegistrationContainer.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleSubmit: () => false,
  handleChange: () => false,
  handleBlur: () => false
};

export { RegistrationContainer };

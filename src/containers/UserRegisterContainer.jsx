import React from 'react';
import { Formik } from 'formik';

import { UserRegister } from '../components/UserRegister';

const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

const validateForm = (values) => {
  const errors = {};

  if (!values.userEmail) {
    errors.userEmail = 'Email обязательное поле';
  } else if (values.userEmail.search(emailValidationRegex) === -1) {
    errors.userEmail = 'Неверный email адрес';
  }
  // валидация пароля
  if (!values.userPass) {
    errors.userPass = 'Пароль обязателен для заполнения';
  } else if (values.userPass.length < 6) {
    errors.userPass = 'Пароль должен быть не менее 6 знаков';
  }
  return errors;
};

class UserRegisterContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Formik
        initialValues={{ userName: '', userEmail: '', userPass: '' }}
        validate={validateForm}
        onSubmit={(values) => {
          // временные данные для отправки
          const message = `данные имя = ${values.userName}, email = ${values.userEmail} и  пароль ${
            values.userPass
          } идут на сервер`;
          console.log(message);
        }}
        render={({ touched, errors, values, handleChange, handleBlur, handleSubmit }) => (
          <UserRegister
            touched={touched}
            errors={errors}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        )}
      />
    );
  }
}

UserRegisterContainer.propTypes = {};

UserRegisterContainer.defaultProps = {};

export { UserRegisterContainer };

import React from 'react';
import { Formik } from 'formik';

import { UserRegister } from '../components/UserRegister';

function validateEmail(value) {
  let error = '';
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  if (!value) {
    error = 'Email обязательное поле';
  } else if (value.search(regex) === -1) {
    error = 'Неверный email адрес';
  }
  return error;
}

function validatePass(value) {
  let error = '';
  if (!value) {
    error = 'Пароль обязателен для заполнения';
  } else if (value.length < 6) {
    error = 'Пароль должен быть не менее 6 знаков';
  }
  return error;
}

class UserRegisterContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Formik
        initialValues={{ userName: '', userEmail: '', userPass: '' }}
        validate={(values) => {
          const errors = {};
          errors.userEmail = validateEmail(values.userEmail);
          errors.userPass = validatePass(values.userPass);
          return errors;
        }}
        onSubmit={(values) => {
          // временные данные для отправки
          const message = `данные ${values} идут на сервер`;
          console.log(message);
        }}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
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

UserRegisterContainer.propTypes = {
};
UserRegisterContainer.defaultProps = {
};

export { UserRegisterContainer };

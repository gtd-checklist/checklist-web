const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

export const emailValidator = (value, isRequired) => {
  if (isRequired && !value) {
    return 'Email обязательное поле';
  }

  if (value.search(emailValidationRegex) === -1) {
    return 'Неверный email адрес';
  }

  return null;
};

export const passwordValidator = (value, isRequired) => {
  if (isRequired && !value) {
    return 'Пароль обязателен для заполнения';
  }

  if (value.length < 6) {
    return 'Пароль должен быть не менее 6 знаков';
  }

  return null;
};

export const createFormValidator = (rules) => {
  const { inputValues, email, pass } = rules;
  const errors = {};
  if (email) {
    const emailValidateResult = emailValidator(inputValues.userEmail, email.isRequired);
    if (emailValidateResult) errors.userEmail = emailValidateResult;
  }
  if (pass) {
    const passValidateResult = passwordValidator(inputValues.userPass, pass.isRequired);
    if (passValidateResult) errors.userPass = passValidateResult;
  }
  return errors;
};

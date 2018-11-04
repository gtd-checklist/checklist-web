import { createFormValidator, emailValidator, passwordValidator } from './formValidators';

describe('validator factory tests', () => {
  test('it creates a form validator function', () => {
    const validateForm = createFormValidator({
      a: { validator: () => ({}), isRequired: false }
    });

    expect(typeof validateForm).toEqual('function');
  });

  test('it validates required fields', () => {
    const validator = (value, isRequired) => {
      if (!value && isRequired) {
        return 'value is required';
      }

      return null;
    };

    const validateForm = createFormValidator({
      a: { validator, isRequired: true },
      b: { validator, isRequired: false }
    });

    const validationResult = validateForm({});

    expect(validationResult).toEqual({
      a: 'value is required'
    });
  });

  test('it works for email & password validators', () => {
    const validateForm = createFormValidator({
      userEmail: { validator: emailValidator, isRequired: false },
      userEmailRequired: { validator: emailValidator, isRequired: true },
      userPass: { validator: passwordValidator, isRequired: false },
      userPassRequired: { validator: passwordValidator, isRequired: true }
    });

    const validResult = validateForm({
      userEmail: 'a',
      userPass: 'abc'
    });

    expect(validResult).toEqual({
      userEmail: 'Неверный email адрес',
      userEmailRequired: 'Email обязательное поле',
      userPass: 'Пароль должен быть не менее 6 знаков',
      userPassRequired: 'Пароль обязателен для заполнения'
    });
  });
});

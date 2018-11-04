import * as Yup from 'yup';

export const AuthorizationSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email('Неверный email адрес')
    .required('Email обязательное поле')
});

export const RegistrationSchema = Yup.object().shape({
  userName: Yup.string()
    .max(50, 'Слишком длинное имя'),
  userEmail: Yup.string()
    .email('Неверный email адрес')
    .max(50, 'Слишком большой email')
    .required('Email обязательное поле'),
  userPass: Yup.string()
    .min(4, 'Пароль должен быть не менее 4 знаков')
    .max(50, 'Слишком длинный пароль')
    .required('Пароль обязателен для заполнения')
});

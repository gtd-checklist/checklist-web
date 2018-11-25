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

export const NewHabitsScheme = Yup.object().shape({
  habitName: Yup.string()
    .max(50, 'Слишком длинное название цели, перенесите в описание')
    .required('Обязательно нужно написать название'),
  habitDescr: Yup.string()
    .max(100, 'Слишком длинное описание, будте кратки'),
  habitType: Yup.mixed()
    .oneOf(['simple', 'number'])
    .required('Цель должна быть простой или числовой'),
  habitCondition: Yup.string()
    .when('habitType', {
      is: val => val === 'number',
      then: Yup.string()
        .oneOf(['less', 'more', 'equally'])
        .required('Не выбрано условие')
    }),
  habitHours: Yup.string()
    .when('habitType', {
      is: val => val === 'number',
      then: Yup.string()
        .required('Нет числа для условия')
    }),
  habitTypeHours: Yup.string()
    .when('habitType', {
      is: val => val === 'number',
      then: Yup.string()
        .required('Нет обозначения')
    }),
  habitRepeat: Yup.string()
    .oneOf(['custom', 'everyday'])
    .required('Не заполнены дни повтора'),
  habitDays: Yup.array()
    .when('habitRepeat', {
      is: val => val === 'custom',
      then: Yup.array()
        .required([true], 'Хотя бы один день должен быть отмечен')
    })
});

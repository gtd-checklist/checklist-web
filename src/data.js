export const habitsData = {
  date: 'Mon Nov 26 2018 20:14:32 GMT+0300',
  habits: [
    {
      id: 1,
      name: 'Ранний подъем',
      description: 'Подъем до 7 утра',
      isNumerical: false,
      repeat: ['пн', 'вт', 'ср', 'чт', 'пт'],
      done: 'true'
    },
    {
      id: 2,
      name: 'Тренировка',
      description: 'Тренажерный зал “Пушкин” в 12:00',
      isNumerical: false,
      repeat: ['вт', 'чт'],
      done: 'false'
    },
    {
      id: 3,
      name: 'Прочитать 20 страниц',
      description: 'Книга Клиновский “Юзабилити”',
      isNumerical: true,
      repeat: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
      successCriteria: {
        number: 2,
        condition: 'LTE'
      },
      done: 'undefined'
    }
  ]
};

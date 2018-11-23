export const habitsData = [
  {
    name: 'Ранний подъем',
    description: 'Подъем до 7 утра',
    type: 'simple', // number
    repeat: ['пн', 'вт', 'ср', 'чт', 'пт'],
    conditional: null, // more equally less
    limit: null,
    units: null,
    done: 'true'
  },
  {
    name: 'Тренировка',
    description: 'Тренажерный зал “Пушкин” в 12:00',
    type: 'simple', // number
    repeat: ['вт', 'чт'],
    conditional: null, // more equally less
    limit: null,
    units: null,
    done: 'false'
  },
  {
    name: 'Прочитать 20 страниц',
    description: 'Книга Клиновский “Юзабилити”',
    type: 'number', // simple
    repeat: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    conditional: 'more', // equally less
    limit: 20,
    units: 'страниц',
    done: 'undefined'
  }
];

export const menuData = [
  {
    name: 'Главная',
    url: '/'
  },
  {
    name: 'Добавить задачу',
    url: '/add'
  },
  {
    name: 'Обзор задач',
    url: '/review'
  },
  {
    name: 'Список задач',
    url: '/list'
  }
];

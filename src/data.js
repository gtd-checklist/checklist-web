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

export const habitsListMonth = {
  month: 12,
  weeks: [
    {
      from: 'Mon Dec 3 2018 00:00:00 GMT+0300',
      to: 'Sun Dec 9 2018 00:00:00 GMT+0300',
      habits: [
        {
          id: 1,
          name: 'Ранний подъем',
          description: 'Подъем до 7 утра',
          plannedIn: [
            'Mon Dec 3 2018 00:00:00 GMT+0300',
            'Wed Dec 5 2018 00:00:00 GMT+0300',
            'Fri Dec 7 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Dec 3 2018 00:00:00 GMT+0300',
            'Wed Dec 5 2018 00:00:00 GMT+0300'
          ]
        },
        {
          id: 2,
          name: 'Тренировка',
          description: 'Тренажерный зал “Пушкин” в 12:00',
          plannedIn: [
            'Mon Dec 3 2018 00:00:00 GMT+0300',
            'Wed Dec 5 2018 00:00:00 GMT+0300',
            'Fri Dec 7 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Dec 3 2018 00:00:00 GMT+0300',
            'Wed Dec 5 2018 00:00:00 GMT+0300'
          ]
        }
      ]
    },
    {
      from: 'Mon Dec 10 2018 00:00:00 GMT+0300',
      to: 'Sun Dec 16 2018 00:00:00 GMT+0300',
      habits: [
        {
          id: 1,
          name: 'Ранний подъем',
          description: 'Подъем до 7 утра',
          plannedIn: [
            'Mon Dec 10 2018 00:00:00 GMT+0300',
            'Sat Dec 15 2018 00:00:00 GMT+0300',
            'Sun Dec 16 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Dec 10 2018 00:00:00 GMT+0300',
            'Sat Dec 15 2018 00:00:00 GMT+0300'
          ]
        },
        {
          id: 2,
          name: 'Тренировка',
          description: 'Тренажерный зал “Пушкин” в 12:00',
          plannedIn: [
            'Mon Dec 10 2018 00:00:00 GMT+0300',
            'Sat Dec 15 2018 00:00:00 GMT+0300',
            'Sun Dec 16 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Dec 10 2018 00:00:00 GMT+0300',
            'Sat Dec 15 2018 00:00:00 GMT+0300'
          ]
        }
      ]
    },
    {
      from: 'Mon Dec 17 2018 00:00:00 GMT+0300',
      to: 'Sun Dec 23 2018 00:00:00 GMT+0300',
      habits: [
        {
          id: 1,
          name: 'Ранний подъем',
          description: 'Подъем до 7 утра',
          plannedIn: [
            'Mon Dec 17 2018 00:00:00 GMT+0300',
            'Sun Dec 23 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Dec 17 2018 00:00:00 GMT+0300'
          ]
        },
        {
          id: 2,
          name: 'Тренировка',
          description: 'Тренажерный зал “Пушкин” в 12:00',
          plannedIn: [
            'Mon Dec 17 2018 00:00:00 GMT+0300',
            'Sun Dec 23 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Sun Dec 23 2018 00:00:00 GMT+0300'
          ]
        }
      ]
    },
    {
      from: 'Mon Dec 24 2018 00:00:00 GMT+0300',
      to: 'Sun Dec 30 2018 00:00:00 GMT+0300',
      habits: [
        {
          id: 1,
          name: 'Ранний подъем',
          description: 'Подъем до 7 утра',
          plannedIn: [
            'Mon Dec 24 2018 00:00:00 GMT+0300',
            'Sun Dec 30 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Nov 24 2018 00:00:00 GMT+0300',
            'Sun Nov 30 2018 00:00:00 GMT+0300'
          ]
        },
        {
          id: 2,
          name: 'Тренировка',
          description: 'Тренажерный зал “Пушкин” в 12:00',
          plannedIn: [
            'Mon Dec 24 2018 00:00:00 GMT+0300',
            'Sun Dec 30 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Nov 24 2018 00:00:00 GMT+0300',
            'Sun Nov 30 2018 00:00:00 GMT+0300'
          ]
        }
      ]
    },
    {
      from: 'Mon Dec 31 2018 00:00:00 GMT+0300',
      to: 'Sun Jan 6 2019 00:00:00 GMT+0300',
      habits: [
        {
          id: 1,
          name: 'Ранний подъем',
          description: 'Подъем до 7 утра',
          plannedIn: [
            'Mon Dec 31 2018 00:00:00 GMT+0300',
            'Wed Jan 2 2019 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Wed Jan 2 2019 00:00:00 GMT+0300'
          ]
        },
        {
          id: 2,
          name: 'Тренировка',
          description: 'Тренажерный зал “Пушкин” в 12:00',
          plannedIn: [
            'Mon Dec 31 2018 00:00:00 GMT+0300',
            'Sun Jan 6 2018 00:00:00 GMT+0300'
          ],
          resolvedIn: [
            'Mon Dec 31 2018 00:00:00 GMT+0300',
            'Sun Jan 6 2018 00:00:00 GMT+0300'
          ]
        }
      ]
    }
  ]
};

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Habits } from '../components/Habits';

const habitsData = [
  {
    name: 'Ранний подъем',
    description: 'Подъем до 7 утра',
    type: 'simple', // number
    repeat: [1, 1, 1, 1, 1, 0, 0],
    conditional: null, // more equally less
    limit: null,
    units: null,
    done: 'true'
  },
  {
    name: 'Тренировка',
    description: 'Тренажерный зал “Пушкин” в 12:00',
    type: 'simple', // number
    repeat: [0, 1, 0, 1, 0, 0, 0],
    conditional: null, // more equally less
    limit: null,
    units: null,
    done: 'false'
  },
  {
    name: 'Прочитать 20 страниц',
    description: 'Книга Клиновский “Юзабилити”',
    type: 'number', // simple
    repeat: [1, 1, 1, 1, 1, 1, 0],
    conditional: 'more', // equally less
    limit: 20,
    units: 'страниц',
    done: 'undefined'
  }
];

class HabitsContainer extends PureComponent {
  getHabitsItem = () => {};

  render() {
    const { habits } = this.props;
    return (
      <Habits habitsData={habitsData} />
    );
  }
}

HabitsContainer.propTypes = {
  habits: PropTypes.instanceOf(Object)
};

HabitsContainer.defaultProps = {
  habits: {}
};

export { HabitsContainer };

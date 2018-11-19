import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { habitsData } from '../data';
import { Habits } from '../components/Habits';


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

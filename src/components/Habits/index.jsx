import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { HabitItems } from '../HabitItems';
import { ButtonUI } from '../../ui/ButtonUI';

import { StyledAddBlock } from './styled';

const Habits = (props) => {
  const { habitsData } = props;
  if (habitsData.length) {
    return (<HabitItems habitsData={habitsData} />);
  }
  return (
    <StyledAddBlock>
      <ButtonUI type="add" sizeui="large" />
      <Typography variant="subtitle1">
        Добавьте свою первую задачу
      </Typography>
    </StyledAddBlock>);
};

Habits.propTypes = {
  habitsData: PropTypes.instanceOf(Object)
};

Habits.defaultProps = {
  habitsData: {}
};

export { Habits };

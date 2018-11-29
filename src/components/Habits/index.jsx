import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { HabitItems } from '../HabitItems';
import { ButtonUI } from '../../ui/ButtonUI';

import { StyledAddBlock } from './styled';

const Habits = (props) => {
  const { habits } = props;
  if (habits.length) {
    return (<HabitItems habits={habits} />);
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
  habits: PropTypes.instanceOf(Object)
};

Habits.defaultProps = {
  habits: {}
};

export { Habits };

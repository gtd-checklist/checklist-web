import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { HabitItems } from '../HabitItems';
import { ButtonUI } from '../../ui/ButtonUI';

import { StyledAddBlock } from './styled';

const Habits = (props) => {
  const { habits, openDialog, waiting } = props;

  // if (waiting) {
  //   return (<Loader />);
  // }

  if (habits.length) {
    return (<HabitItems habits={habits} />);
  }

  return (
    <StyledAddBlock>
      <ButtonUI type="add" sizeui="large" handleClick={openDialog} />
      <Typography variant="subtitle1">
        Добавьте свою первую задачу
      </Typography>
    </StyledAddBlock>);
};

Habits.propTypes = {
  habits: PropTypes.instanceOf(Object),
  waiting: PropTypes.bool,
  openDialog: PropTypes.func
};

Habits.defaultProps = {
  habits: {},
  waiting: false,
  openDialog: () => false
};

export { Habits };

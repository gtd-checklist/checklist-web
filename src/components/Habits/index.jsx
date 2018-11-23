import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import { HabitItems } from '../HabitItems';

import { StyledAddBlock } from './styled';

const Habits = (props) => {
  const { habitsData } = props;
  if (habitsData.length) {
    return (<HabitItems habitsData={habitsData} />);
  }
  return (
    <StyledAddBlock>
      <Button aria-label="Add" variant="fab" color="primary">
        <AddIcon fontSize="large" color="inherit" />
      </Button>
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

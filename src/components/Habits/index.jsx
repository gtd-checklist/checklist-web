import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import { StyledAddBlock } from './styled';


const Habits = () => {
  const habitItems = {};
  return (
    <Grid container direction="column">
      <StyledAddBlock>
        <Button aria-label="Add" variant="fab" color="primary">
          <AddIcon fontSize="large" color="inherit" />
        </Button>
        <Typography variant="subtitle1">
          Добавьте свою первую задачу
        </Typography>
      </StyledAddBlock>
    </Grid>
  );
};

Habits.propTypes = {
};

Habits.defaultProps = {
};

export { Habits };

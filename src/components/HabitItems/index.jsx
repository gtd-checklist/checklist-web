import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Status } from '../../ui/Status';

import { StyledList, StyledListItem, StyledListItemText, StyledCheckIcon } from './styled';

const HabitItems = (props) => {
  const { habits } = props;
  return (
    <StyledList>
      {habits.map((item, indx) => (
        <StyledListItem key={indx}>
          <Status isNumerical={item.isNumerical} />
          <Grid container direction="column">
            <StyledListItemText
              primary={
                <Typography variant="h6" component="span">{item.name}</Typography>}
              secondary={
                <Typography variant="subtitle1" component="span">{item.description}</Typography>
              }
            />
            <StyledListItemText
              type="schedule"
              secondary="вт"
            />
          </Grid>
          <StyledCheckIcon done={item.done} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

HabitItems.propTypes = {
  habits: PropTypes.instanceOf(Object)
};

HabitItems.defaultProps = {
  habits: {}
};

export { HabitItems };

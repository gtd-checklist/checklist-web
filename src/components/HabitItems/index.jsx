import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { StyledList, StyledListItem, StyledListItemText, StyledStatus, StyledCheckIcon } from './styled';

const HabitItems = (props) => {
  const { habitsData } = props;
  return (
    <StyledList>
      {habitsData.map((item, indx) => (
        <StyledListItem key={indx}>
          <ListItemAvatar>
            <StyledStatus aria-label="Status" type={item.type}>&nbsp;</StyledStatus>
          </ListItemAvatar>
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
  habitsData: PropTypes.instanceOf(Object)
};

HabitItems.defaultProps = {
  habitsData: {}
};

export { HabitItems };

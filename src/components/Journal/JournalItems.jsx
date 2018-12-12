import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { Status } from '../../ui/Status';
import { Calendar } from './Calendar';

import { StyledListItem, StyledWeekName } from './styled';

const JournalItems = (props) => {
  const {
    weeks,
    getHabitsWeek,
    getHabitsWeekNumber,
    createPlannedDate,
    createResolvedDate
  } = props;
  return (
    <Grid item md={8} xs={12} align="center">
      {weeks.map((item, indx) => (
        <Fragment key={indx}>
          <StyledWeekName variant="overline">
            {getHabitsWeekNumber(item.from)}
            &nbsp;неделя&nbsp;
          </StyledWeekName>
          {item.habits.map(itemHabits => (
            <List key={itemHabits.id}>
              <StyledListItem>
                <Status isNumerical="true" top="true" />
                <Grid container direction="column">
                  <ListItemText
                    primary={(
                      <Typography variant="h6" component="span">
                        {itemHabits.name}
                      </Typography>
                    )}
                    secondary={(
                      <Typography variant="subtitle1" component="span">
                        {itemHabits.description}
                      </Typography>
                    )}
                  />
                  <Calendar
                    planned={createPlannedDate(itemHabits.plannedIn)}
                    resolved={createResolvedDate(itemHabits.resolvedIn)}
                    weekNames={getHabitsWeek(item.from)}
                  />
                </Grid>
              </StyledListItem>
            </List>
          ))}
        </Fragment>
      ))}
    </Grid>
  );
};

JournalItems.propTypes = {
  weeks: PropTypes.instanceOf(Array),
  getHabitsWeek: PropTypes.func,
  getHabitsWeekNumber: PropTypes.func,
  createPlannedDate: PropTypes.func,
  createResolvedDate: PropTypes.func
};

JournalItems.defaultProps = {
  weeks: [],
  getHabitsWeek: () => false,
  getHabitsWeekNumber: () => false,
  createPlannedDate: () => false,
  createResolvedDate: () => false
};

export { JournalItems };

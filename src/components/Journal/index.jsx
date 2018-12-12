import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import { Loader } from '../../ui/Loader';
import { Navbar } from '../../ui/Navbar';
import { JournalItems } from './JournalItems';
import HeaderContainer from '../../containers/HeaderContainer';

import { StyledContent } from '../../globalStyled';

const Journal = (props) => {
  const {
    waiting,
    weeks,
    getHabitsWeek,
    getHabitsWeekNumber,
    createPlannedDate,
    createResolvedDate
  } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
        <HeaderContainer />
        <StyledContent container justify="center">
          {waiting
            ? <Loader />
            : (
              <JournalItems
                weeks={weeks}
                getHabitsWeek={getHabitsWeek}
                getHabitsWeekNumber={getHabitsWeekNumber}
                createPlannedDate={createPlannedDate}
                createResolvedDate={createResolvedDate}
              />)
          }
        </StyledContent>
      </Grid>
    </Grid>
  );
};

Journal.propTypes = {
  waiting: PropTypes.bool.isRequired,
  weeks: PropTypes.instanceOf(Array),
  getHabitsWeek: PropTypes.func,
  getHabitsWeekNumber: PropTypes.func,
  createPlannedDate: PropTypes.func,
  createResolvedDate: PropTypes.func
};

Journal.defaultProps = {
  weeks: [],
  getHabitsWeek: () => false,
  getHabitsWeekNumber: () => false,
  createPlannedDate: () => false,
  createResolvedDate: () => false
};

export { Journal };

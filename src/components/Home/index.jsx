import React from 'react';

import Grid from '@material-ui/core/Grid';

import { StyledContent } from '../../globalStyled';

import { Navbar } from '../../ui/Navbar';
import SubMenuContainer from '../../containers/SubMenuContainer';
import AddHabitContainer from '../../containers/AddHabitContainer';
import ReviewContainer from '../../containers/ReviewContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import HabitsContainer from '../../containers/HabitsContainer';
import { HorizontalCalendContainer } from '../../containers/HorizontalCalendContainer';

const Home = () => (
  <Grid container>
    <Grid item xs={12}>
      <Navbar />
      <HeaderContainer />
      <StyledContent container justify="center">
        <Grid item md={8} xs={12} align="center">
          <HorizontalCalendContainer />
          <SubMenuContainer />
          <HabitsContainer />
        </Grid>
      </StyledContent>
    </Grid>
    <AddHabitContainer />
    <ReviewContainer />
  </Grid>
);

export { Home };

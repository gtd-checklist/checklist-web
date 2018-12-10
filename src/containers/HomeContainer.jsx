import React from 'react';

import Grid from '@material-ui/core/Grid';

import { StyledContent } from '../globalStyled';

import { Navbar } from '../ui/Navbar';
import SubMenuContainer from './SubMenuContainer';
import AddHabitContainer from './AddHabitContainer';
import ReviewContainer from './ReviewContainer';
import HeaderContainer from './HeaderContainer';
import HabitsContainer from './HabitsContainer';
import HorizontalCalendContainer from './HorizontalCalendContainer';

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

export default Home;

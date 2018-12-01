import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import { StyledContent, StyledTitle } from '../../globalStyled';
import { StyledHeader } from './styled';

import { Navbar } from '../../ui/Navbar';
import SubMenuContainer from '../../containers/SubMenuContainer';
import AddHabitContainer from '../../containers/AddHabitContainer';

import HabitsContainer from '../../containers/HabitsContainer';
import { HorizontalCalendContainer } from '../../containers/HorizontalCalendContainer';

import back from '../../img/back-mountain2.jpg';

const Home = (props) => {
  const { month, year, isOpen } = props;
  console.log(`home ${isOpen}`);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
        <StyledHeader container back={back} color="secondary">
          <StyledTitle component="h1" variant="h1" align="center" color="inherit" year={year}>
            {month}
          </StyledTitle>
        </StyledHeader>
        <StyledContent container justify="center">
          <Grid item md={8} xs={12} align="center">
            <HorizontalCalendContainer />
            <SubMenuContainer />
            <HabitsContainer />
          </Grid>
        </StyledContent>
      </Grid>
      <AddHabitContainer isOpen={isOpen} />
    </Grid>
  );
};

Home.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export { Home };

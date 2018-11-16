import React from 'react';
// import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import { StyledHeader } from './styled';
import { StyledContent, StyledTitle } from '../../globalStyled';

import { Navbar } from '../../ui/Navbar';
import { HorizontalCalendContainer } from '../../containers/HorizontalCalendContainer';
import { Habits } from '../Habits';

import back from '../../img/back-mountain2.jpg';

const Home = () => {
  const menu = '';
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
        <StyledHeader container back={back} color="secondary">
          <StyledTitle component="h1" variant="h1" align="center" color="inherit" year="2018">
            Ноябрь
          </StyledTitle>
        </StyledHeader>
        <StyledContent container justify="center">
          <Grid item md={8} xs={12} align="center">
            <HorizontalCalendContainer />
            <Habits />
          </Grid>
        </StyledContent>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
};

Home.defaultProps = {
};

export { Home };
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Avatar from '@material-ui/core/Avatar';

import { MenuContainer } from '../../containers/MenuContainer';

import { Logo } from '../Logo';

const Navbar = () => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Grid container justify="space-between" alignItems="center">
        <MenuContainer />
        <Logo navbar />
        <IconButton>
          <Avatar>Н</Avatar>
        </IconButton>
      </Grid>
    </Toolbar>
  </AppBar>
);

Navbar.propTypes = {
};

Navbar.defaultProps = {
};

export { Navbar };

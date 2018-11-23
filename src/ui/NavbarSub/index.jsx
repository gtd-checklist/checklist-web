import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

import { StyledAppBar, StyledIconButton } from './styled';

const NavbarSub = (props) => {
  const { toggleDrawer } = props;
  return (
    <StyledAppBar position="static" color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <StyledIconButton onClick={toggleDrawer}>
            <CloseIcon />
          </StyledIconButton>
          <IconButton>
            <Avatar>Н</Avatar>
          </IconButton>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

NavbarSub.propTypes = {
  toggleDrawer: PropTypes.func
};

NavbarSub.defaultProps = {
  toggleDrawer: () => null
};

export { NavbarSub };

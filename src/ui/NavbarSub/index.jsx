import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';

import { StyledAppBar, StyledIconButton, NavHeader } from './styled';

const NavbarSub = (props) => {
  const { toggleDrawer, action, title, coloricon } = props;
  return (
    <StyledAppBar position="static" color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          {action === 'close'
            ? (
              <StyledIconButton onClick={toggleDrawer} coloricon={coloricon}>
                <CloseIcon />
              </StyledIconButton>)
            : (
              <StyledIconButton coloricon={coloricon}>
                <ArrowBackIcon />
              </StyledIconButton>)
          }
          { title
            ? <NavHeader variant="h4" coloricon={coloricon}>{title}</NavHeader>
            : null
          }
          <IconButton>
            <Avatar>Н</Avatar>
          </IconButton>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

NavbarSub.propTypes = {
  toggleDrawer: PropTypes.func,
  action: PropTypes.string,
  title: PropTypes.string,
  coloricon: PropTypes.string
};

NavbarSub.defaultProps = {
  toggleDrawer: () => null,
  action: '',
  title: '',
  coloricon: ''
};

export { NavbarSub };

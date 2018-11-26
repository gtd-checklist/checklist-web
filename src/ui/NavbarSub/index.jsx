import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { StyledAppBar, StyledIconButton } from './styled';

const NavbarSub = (props) => {
  const { toggleDrawer, action, title } = props;
  return (
    <StyledAppBar position="static" color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          {action === 'close'
            ? (
              <StyledIconButton onClick={toggleDrawer} coloricon="white">
                <CloseIcon />
              </StyledIconButton>)
            : (
              <StyledIconButton coloricon="black">
                <ArrowBackIcon />
              </StyledIconButton>)
          }
          { title
            ? <Typography variant="h4">{title}</Typography>
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
  title: PropTypes.string
};

NavbarSub.defaultProps = {
  toggleDrawer: () => null,
  action: '',
  title: ''
};

export { NavbarSub };

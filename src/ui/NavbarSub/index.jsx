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
  const { action, actionType, title, coloricon } = props;
  return (
    <StyledAppBar position="static" color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          {actionType === 'close'
            ? (
              <StyledIconButton coloricon={coloricon} onClick={action}>
                <CloseIcon />
              </StyledIconButton>)
            : (
              <StyledIconButton coloricon={coloricon} onClick={action} href="/">
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
  action: PropTypes.func,
  actionType: PropTypes.string,
  title: PropTypes.string,
  coloricon: PropTypes.string
};

NavbarSub.defaultProps = {
  action: () => null,
  actionType: '',
  title: '',
  coloricon: ''
};

export { NavbarSub };

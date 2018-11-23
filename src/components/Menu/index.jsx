import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { NavbarSub } from '../../ui/NavbarSub';

import { StyledLink, StyledExitBlock, StyledExitButton, StyledListItem } from './styled';
import { BgImageTransparent } from '../../globalStyled';

import back from '../../img/back_menu.jpg';

const Menu = (props) => {
  const { routes, isOpenned, toggleDrawer } = props;
  return (
    <Fragment>
      <IconButton aria-label="Menu" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpenned} onClose={toggleDrawer}>
        <BgImageTransparent
          tabIndex={0}
          container
          direction="column"
          alignItems="center"
          justify="space-between"
          back={back}
          color="primary"
        >
          <NavbarSub toggleDrawer={toggleDrawer} />
          <List>
            {routes.map((item, indx) => (
              <StyledListItem key={`submenu-${indx}`}>
                <ListItemText primary={<StyledLink to={item.path}>{item.name}</StyledLink>} />
              </StyledListItem>
            ))}
          </List>
          <StyledExitBlock container direction="column" alignItems="flex-end">
            <Typography variant="button" color="inherit">
              Выход
            </Typography>
            <StyledExitButton>
              <ExitToAppIcon />
            </StyledExitButton>
          </StyledExitBlock>
        </BgImageTransparent>
      </Drawer>
    </Fragment>
  );
};

Menu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  isOpenned: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

Menu.defaultProps = {
  routes: [],
  isOpenned: false,
  toggleDrawer: () => null
};

export { Menu };

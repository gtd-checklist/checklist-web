import React from 'react';
import PropTypes from 'prop-types';

import { ButtonUI } from '../../ui/ButtonUI';

import { StyledNavBar } from './styled';

const SubMenu = (props) => {
  const { openDialog } = props;
  return (
    <StyledNavBar container justify="flex-end" alignItems="center">
      <ButtonUI type="check" sizeui="large" handleClick={openDialog} />
      <ButtonUI type="add" sizeui="small" />
    </StyledNavBar>
  );
};

SubMenu.propTypes = {
  openDialog: PropTypes.func
};

SubMenu.defaultProps = {
  openDialog: () => false
};

export { SubMenu };

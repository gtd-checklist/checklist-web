import React from 'react';
import PropTypes from 'prop-types';

import { ButtonUI } from '../../ui/ButtonUI';

import { StyledNavBar } from './styled';

const SubMenu = (props) => {
  const { openAddHabitDialog, onClickReview } = props;
  return (
    <StyledNavBar container justify="flex-end" alignItems="center">
      <ButtonUI type="check" sizeui="large" handleClick={onClickReview} />
      <ButtonUI type="add" sizeui="small" handleClick={openAddHabitDialog} />
    </StyledNavBar>
  );
};

SubMenu.propTypes = {
  openAddHabitDialog: PropTypes.func,
  onClickReview: PropTypes.func
};

SubMenu.defaultProps = {
  openAddHabitDialog: () => false,
  onClickReview: () => false
};

export { SubMenu };

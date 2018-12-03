import React from 'react';
import PropTypes from 'prop-types';

import { ButtonUI } from '../../ui/ButtonUI';

import { StyledNavBar } from './styled';

const SubMenu = (props) => {
  const { openAddHabitDialog, openReviewHabitDialog } = props;
  return (
    <StyledNavBar container justify="flex-end" alignItems="center">
      <ButtonUI type="check" sizeui="large" handleClick={openReviewHabitDialog} />
      <ButtonUI type="add" sizeui="small" handleClick={openAddHabitDialog} />
    </StyledNavBar>
  );
};

SubMenu.propTypes = {
  openAddHabitDialog: PropTypes.func,
  openReviewHabitDialog: PropTypes.func
};

SubMenu.defaultProps = {
  openAddHabitDialog: () => false,
  openReviewHabitDialog: () => false
};

export { SubMenu };

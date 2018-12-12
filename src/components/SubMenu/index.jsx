import React from 'react';
import PropTypes from 'prop-types';

import { ButtonUI } from '../../ui/ButtonUI';
import { Loader } from '../../ui/Loader';
import { StyledNavBar } from './styled';

const SubMenu = (props) => {
  const { openAddHabitDialog, onClickReview, waiting } = props;
  return (
    <StyledNavBar container justify="flex-end" alignItems="center">
      <ButtonUI type="check" sizeui="large" handleClick={onClickReview} />
      {
        waiting ? <Loader outline="true" /> : null
      }
      <ButtonUI type="add" sizeui="small" handleClick={openAddHabitDialog} />
    </StyledNavBar>
  );
};

SubMenu.propTypes = {
  openAddHabitDialog: PropTypes.func,
  onClickReview: PropTypes.func,
  waiting: PropTypes.bool.isRequired
};

SubMenu.defaultProps = {
  openAddHabitDialog: () => false,
  onClickReview: () => false
};

export { SubMenu };

import React from 'react';
import PropTypes from 'prop-types';


import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

import { StyledButton } from './styled';

const ButtonUI = (props) => {
  const { type, sizeui, handleClick } = props;
  let icon;
  if (type === 'check') {
    icon = <CheckIcon fontSize={sizeui} />;
  }
  if (type === 'add') {
    icon = <AddIcon fontSize={sizeui} />;
  }
  if (type === 'cancel') {
    icon = <CloseIcon fontSize={sizeui} />;
  }
  return (
    <StyledButton type={type} sizeui={sizeui} variant="fab" onClick={handleClick}>
      {icon}
    </StyledButton>
  );
};

ButtonUI.propTypes = {
  type: PropTypes.string,
  sizeui: PropTypes.string,
  handleClick: PropTypes.func
};

ButtonUI.defaultProps = {
  type: '',
  sizeui: '',
  handleClick: () => false
};

export { ButtonUI };

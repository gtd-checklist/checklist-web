import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { StyledIconButton } from './styled';

const ActionIconButton = (props) => {
  const { actionType, coloricon, action } = props;

  if (actionType === 'close') {
    return (
      <StyledIconButton coloricon={coloricon} onClick={action}>
        <CloseIcon />
      </StyledIconButton>
    );
  }

  return (
    <StyledIconButton coloricon={coloricon} onClick={action} href="/">
      <ArrowBackIcon />
    </StyledIconButton>
  );
};

ActionIconButton.propTypes = {
  action: PropTypes.func,
  actionType: PropTypes.string,
  coloricon: PropTypes.string
};

ActionIconButton.defaultProps = {
  action: () => null,
  actionType: '',
  coloricon: ''
};

export { ActionIconButton };

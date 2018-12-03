import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { StyledHeaderOnDark, StyledCloseButton } from './styled';

const ConfirmBlock = (props) => {
  const { closeDialog, text } = props;
  return (
    <StyledHeaderOnDark container direction="column" alignItems="center">
      <Typography align="center" variant="h3">{text}</Typography>
      <StyledCloseButton variant="outlined" onClick={closeDialog}>
      Закрыть окно
      </StyledCloseButton>
    </StyledHeaderOnDark>
  );
};

ConfirmBlock.propTypes = {
  closeDialog: PropTypes.func,
  text: PropTypes.string
};

ConfirmBlock.defaultProps = {
  closeDialog: () => null,
  text: ''
};

export { ConfirmBlock };

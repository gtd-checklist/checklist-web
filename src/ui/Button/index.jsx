import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styled';

const Button = (props) => {
  const { title } = props;

  return (
    <StyledButton {...props}>{title}</StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  isSubmit: PropTypes.bool
};

Button.defaultProps = {
  title: '',
  type: 'button',
  isSubmit: false
};

export { Button };

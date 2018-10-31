import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styled';

const Button = (props) => {
  const { title } = props;

  return (
    <Fragment>
      <StyledButton {...props}>{title}</StyledButton>
    </Fragment>
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

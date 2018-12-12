import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoader } from './styled';

const Loader = (props) => {
  const { outline } = props;
  return (
    <StyledLoader color="secondary" size={68} thickness={3} outline={outline} />
  );
};

Loader.propTypes = {
  outline: PropTypes.string
};

Loader.defaultProps = {
  outline: ''
};

export { Loader };

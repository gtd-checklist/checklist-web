import React from 'react';
import PropTypes from 'prop-types';

import { StyledHellow } from './styled';

const HelloWorld = (props) => {
  const { sampleProp } = props;

  return <StyledHellow>{sampleProp}</StyledHellow>;
};

HelloWorld.propTypes = {
  sampleProp: PropTypes.string
};

HelloWorld.defaultProps = {
  sampleProp: 'Hello, world!'
};

export { HelloWorld };

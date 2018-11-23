import React from 'react';
import PropTypes from 'prop-types';

import { Brand } from './styled';

const Logo = (props) => {
  const { navbar } = props;
  return (
    <Brand navbar={navbar} />
  );
};

Logo.propTypes = {
  navbar: PropTypes.bool
};

Logo.defaultProps = {
  navbar: false
};

export { Logo };

import React from 'react';
import PropTypes from 'prop-types';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { StyledStatus } from './styled';

const Status = (props) => {
  const { isNumerical, top } = props;
  return (
    <ListItemAvatar>
      <StyledStatus aria-label="Status" type={isNumerical.toString()} top={top}>&nbsp;</StyledStatus>
    </ListItemAvatar>
  );
};

Status.propTypes = {
  isNumerical: PropTypes.string.isRequired,
  top: PropTypes.string
};

Status.defaultProps = {
  top: ''
};

export { Status };

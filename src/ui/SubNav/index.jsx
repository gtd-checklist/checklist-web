import React from 'react';

import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

import { StyledNavBar, StyledAddButton } from './styled';

const SubNav = () => {
  const menu = {};
  return (
    <StyledNavBar container justify="flex-end" alignItems="center">
      <StyledAddButton aria-label="Add" variant="fab" color="secondary">
        <CheckIcon fontSize="large" />
      </StyledAddButton>
      <Button aria-label="Add" mini variant="fab" color="primary">
        <AddIcon />
      </Button>
    </StyledNavBar>
  );
};

export { SubNav };

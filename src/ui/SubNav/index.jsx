import React from 'react';

import { ButtonUI } from '../ButtonUI';

import { StyledNavBar } from './styled';

const SubNav = () => (
  <StyledNavBar container justify="flex-end" alignItems="center">
    <ButtonUI type="check" sizeui="large" />
    <ButtonUI type="add" sizeui="small" />
  </StyledNavBar>
);

export { SubNav };

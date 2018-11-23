import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { theme } from '../Themes';

const { palette } = theme;

export const StyledNavBar = styled(Grid)`
  position: relative;
  top: -30px;
  padding-right: 16px;
`;

export const StyledAddButton = styled(Button)`
  &&{
    color: ${palette.text.inverse};
    margin: 0 16px;
  }
`;

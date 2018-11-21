import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

import { theme } from '../Themes';

const { palette } = theme;

export const StyledAppBar = styled(AppBar)`
  &&{
      box-shadow: none;
      background-color: transparent;
      
      @media (max-width: 960px) {
        width: 100vw;
      }
  }
`;

export const StyledIconButton = styled(IconButton)`
  &&{
    color: ${palette.text.inverse};
  }
`;
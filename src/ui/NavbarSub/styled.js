import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import { theme } from '../Themes';

const { palette } = theme;

export const StyledAppBar = styled(AppBar)`
  &&{
    box-shadow: none;
    background-color: transparent;
  }
  @media (max-width: 960px) {
    width: 100vw;
  }
`;

export const NavHeader = styled(Typography)`
&&{
  color: ${props => (props.coloricon === 'white'
    ? palette.text.inverse
    : palette.text.main)};
}
`;

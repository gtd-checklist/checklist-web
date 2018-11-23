import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';

import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledListItem = styled(ListItem)`
  &&{
    padding: 0 50px;
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  color: ${palette.text.inverseLight};
  font-size: 1.5em;
  text-decoration: none;
  padding: 10px;
  :hover{
    color: ${palette.text.inverse};
  }
  :active{
    background-color: ${palette.surface.light}
  }
`;

export const StyledExitBlock = styled(Grid)`
  &&{
    color: ${palette.text.inverse};
    padding: 24px;
    opacity: 0.9;
  }
`;

export const StyledExitButton = styled(IconButton)`
  &&{
    color: ${palette.text.inverseLight};
  }
`;

import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledListItem = styled(ListItem)`
  &&{
    background-color: ${props => (props.day ? palette.secondary.light : 'transparent')};
    padding-bottom: 40px;
  }
`;

export const BackCalend = styled(Grid)`
    background-color: ${palette.surface.light};
`;

export const StyledList = styled(List)`
  flex: auto;
  display: flex;
  &&{
    padding: 0;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  text-align: center;
  &&{
    font-weight: 500;
    padding: 0;
  }
`;

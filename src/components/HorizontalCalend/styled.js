import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { theme } from '../../ui/Themes';

const { palette } = theme;

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

export const StyledListItem = styled(ListItem)`
  &&{
    border-right: ${props => (props.day ? `1px solid ${palette.border.main}` : 'none')};
    border-left: ${props => (props.day ? `1px solid ${palette.border.main}` : 'none')};
  }
`;

export const StyledListItemText = styled(ListItemText)`
  text-align: center;
  &&{
    font-weight: 500;
    padding: 0;
  }
`;

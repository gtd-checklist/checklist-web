import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { theme } from '../../ui/Themes';

const { palette } = theme;


export const StyledList = styled(List)`
  width: 100%;
  &&{
    padding-bottom: 60px;
  }
`;

export const StyledListItem = styled(ListItem)`
  border-bottom: 1px solid ${palette.border.main};
  padding: 0 16px;
`;

export const StyledListItemText = styled(ListItemText)`
  &&{
    padding: 0;
    margin: 0 16px;
  }
`;

export const StyledCheckIcon = styled(CheckCircleIcon)`
  color: ${(props) => {
    if (props.done === 'true') return palette.secondary.main;
    if (props.done === 'false') return palette.error.main;
    return palette.surface.light;
  }};
`;

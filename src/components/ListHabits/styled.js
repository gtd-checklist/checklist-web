import styled from 'styled-components';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledListItem = styled(ListItem)`
  &&{
      align-items: flex-start;
  }
`;

export const StyledListItemCalendar = styled(ListItem)`
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => {
    if (props.done && props.planned) return palette.secondary.main;
    if (!props.done && props.planned) return palette.error.main;
    return 'transparent';
  }};
  color: ${props => (props.planned ? palette.text.main : palette.text.light)};
  opacity: ${props => (props.planned ? '1' : '0.6')};
  margin-left: 1px;
  :first-child{
    margin-left: 0px;
  }
`;

export const StyledWeekName = styled(Typography)`
  &&{
      font-size: 1.1em;
      margin-top: 50px;
  }

  @media (max-width: 960px) {
        background-color: ${palette.surface.light};
  }
`;

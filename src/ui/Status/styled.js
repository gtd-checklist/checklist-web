import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';

import { theme } from '../Themes';

const { palette } = theme;

export const StyledStatus = styled(Avatar)`
  &&{
    width: 10px;
    height: 10px;
    background-color: ${props => (props.type === 'true'
    ? palette.primary.main
    : palette.secondary.main)};
  }
  ${props => (props.top ? 'margin: 10px' : null)};
`;

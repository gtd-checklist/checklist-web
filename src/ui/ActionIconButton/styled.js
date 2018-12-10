import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { theme } from '../Themes';

const { palette } = theme;

export const StyledIconButton = styled(IconButton)`
  &&{
    color: ${props => (props.coloricon === 'white'
    ? palette.text.inverse
    : palette.text.main)};
  }
`;

import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { theme } from '../Themes';

const { palette } = theme;

export const StyledButton = styled(Button)`
  &&{
    width: ${props => (props.sizeui === 'small' ? '40px' : '56px')};
    height: ${props => (props.sizeui === 'small' ? '40px' : '56px')};
    color: ${palette.text.inverse};
    ${props => (props.type === 'cancel' ? `background-color: ${palette.error.main}` : null)}
    ${props => (props.type === 'check' ? `background-color: ${palette.secondary.main}` : null)}
    ${props => (props.type === 'add' ? `background-color: ${palette.primary.main}` : null)}
  }
`;

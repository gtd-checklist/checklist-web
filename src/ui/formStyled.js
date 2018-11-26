import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { theme } from './Themes';

const { palette } = theme;

// background form
export const StyledBackForm = styled(Grid)`
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0 6px 10px 0 ${palette.shadow};
  background-color: ${props => (props.transparent ? palette.surface.transparent : palette.surface.main)};

  @media (max-width: 960px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  padding: 30px;
  flex: auto;
`;

export const StyledInput = styled(TextField)`
  && {
    input{
      font-weight: 400;
    }
    label{
      font-size: ${props => (props.size === 'big' ? '1.6em' : 'inherit')};
      position: relative;
    }
    p{
      font-weight: 500;
    } 
  }
`;

export const StyledButton = styled(Button)`
  && {
    font-weight: 400;
    font-size: 0.9em;
    padding: 22px 0;
    margin-top: 20px;
    border-radius: 40px;
    color: ${palette.text.inverse};
    box-shadow: 0 6px 10px 0 ${palette.shadow};
  }
`;

export const StyledError = styled(Typography)`
  &&{
    color: ${palette.error.main};
  }
`;
// after submit bottom
export const StyledGoTo = styled(Typography)`
  flex: auto;
  &&{
    color: ${props => (props.dark ? palette.text.inverse : palette.text.main)};
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled.a`
color: ${props => (props.dark ? palette.text.inverse : palette.text.main)};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  margin-left: 20px;
    
  :hover{
    text-decoration: underline;
  }
`;

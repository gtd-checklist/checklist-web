import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// background from
export const StyledBackForm = styled(Grid)`
  border-radius: 20px;
  box-shadow: 0 6px 10px 0 ${props => props.theme.colors.Shadow};

  @media (max-width: 960px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

export const StyledForm = styled.form`
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
`;

export const StyledInput = styled(TextField)`
  && {
    input{
      font-weight: 400;
    }
    p{
      font-family: inherit;
      font-weight: 500;
    }   
  }
`;

export const StyledButton = styled(Button)`
  && {
    font-family: inherit;
    font-weight: 400;
    font-size: 0.9em;
    padding: 22px 0;
    margin-top: 20px;
    border-radius: 40px;
    background-color: ${props => props.theme.colors.Secondary};
    color: ${props => props.theme.colors.OnSurface};
    box-shadow: 0 6px 10px 0 ${props => props.theme.colors.Shadow};

    :hover{
      color: ${props => props.theme.colors.OnOppositeSurface};
    }
  }
`;

export const StyledError = styled.div`
  color: ${props => props.theme.colors.Error};
  font-size: 0.8em;
  font-weight: 500;
`;
// after submit bottom
export const StyledGoTo = styled.div`
  flex: auto;
  text-align: center;
  color: ${props => props.theme.colors.OnSurface};
  margin-bottom: 20px;
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.OnSurface};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  margin-left: 20px;
`;

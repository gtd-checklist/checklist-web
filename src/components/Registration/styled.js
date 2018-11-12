import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { BgImageTransparent } from '../../globalStyled';
import { StyledBackForm, StyledInput, StyledGoTo, StyledLink } from '../../ui/formStyled';

export const StyledWrapper = styled(BgImageTransparent)`
  flex: auto;
`;

export const StyledLogo = styled(Grid)`
  min-height: 300px;
`;

export const StyledBackFormReg = styled(StyledBackForm)`
  background-color: ${props => props.theme.colors.OnSurface};
`;

export const StyledInputReg = styled(StyledInput)`
  && {
    label, p{
      color: ${props => (props.err ? props.theme.colors.Error : props.theme.colors.Label)};
    }
    input{
      color: ${props => props.theme.colors.Input};
    }
    div:after, div:before{
      border-bottom: 1px solid ${props => props.theme.colors.Border};
    } 
  }
`;

export const StyledDescription = styled.div`
  margin-top:10px;
  font-size: 0.8em;
`;

export const StyledGoToReg = styled(StyledGoTo)`
  color: ${props => props.theme.colors.OnOppositeSurface};
`;

export const StyledLinkReg = styled(StyledLink)`
  color: ${props => props.theme.colors.OnOppositeSurface};

  :hover{
    text-decoration: underline;
  }
`;

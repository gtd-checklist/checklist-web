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

export const StyledBackFormAuth = styled(StyledBackForm)`
  background-color: ${props => props.theme.colors.OnSurfaceTransparent};
`;

export const StyledInputAuth = styled(StyledInput)`
  && {
    label, p{
      color: ${props => (props.err ? props.theme.colors.Error : props.theme.colors.LabelOpposite)};
      font-weight: 500;
    }
    input{
      color: ${props => props.theme.colors.InputOpposite};
    }
    div:after, div:before{
      border-bottom: 1px solid ${props => props.theme.colors.BorderOpposite};
    } 
  }
`;

export const StyledGoToAuth = styled(StyledGoTo)`
  color: ${props => props.theme.colors.OnSurface};
`;

export const StyledLinkAuth = styled(StyledLink)`
  color: ${props => props.theme.colors.OnSurface};

  :hover{
    text-decoration: underline;
  }
`;

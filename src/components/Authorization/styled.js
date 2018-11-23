import styled from 'styled-components';

import { StyledInput } from '../../ui/formStyled';

import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledInputAuth = styled(StyledInput)`
  && {
    label, p{
      color: ${props => (props.err ? palette.error.main : palette.text.inverseLight)};
      font-weight: 500;
    }
    input{
      color: ${palette.text.inverse};
    }
    div:after, div:before{
      border-bottom: 1px solid ${palette.border.inverse};
    } 
  }
`;

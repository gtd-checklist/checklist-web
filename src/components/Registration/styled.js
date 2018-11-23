import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import { StyledInput } from '../../ui/formStyled';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledInputReg = styled(StyledInput)`
  && {
    label, p{
      color: ${props => (props.err ? palette.error.main : palette.text.light)};
    }
    input{
      color: ${palette.text.main};
    }
    div:after, div:before{
      border-bottom: 1px solid ${palette.border.main};
    } 
  }
`;

export const StyledDescription = styled(Typography)`
  margin-top:10px;
  font-size: 0.8em;
`;

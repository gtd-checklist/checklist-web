import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

import { StyledInput } from '../../ui/formStyled';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledFormControl = styled(FormControl)`
  width: ${props => (props.width ? props.width : '100%')};
  &&{
    label{
      font-size: 1em;
    }
    div input{
      font-size: 2.2em;
    }
  }
`;

export const StyledInputNewHabit = styled(StyledInput)`
  &&{
    label, p{
      color: ${props => (props.err ? palette.error.main : palette.text.light)};
    }
  }
`;

export const StyledHeader = styled(Typography)`
  &&{
    margin-top:${props => (props.gutterBottom ? '20px' : '0')};
    font-weight: 500;
  }
`;

export const StyledLabel = styled(Typography)`
  &&{
    transform: translateX(-10px);
  }
`;

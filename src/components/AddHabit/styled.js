import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { } from '../../ui/formStyled';
import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledFormControl = styled(FormControl)`
  width: ${props => (props.width ? props.width : '100%')};
  &&{
    label{
      font-size: 1.2em;
    }
    div input{
      font-size: 2.2em;
    }
  }
`;

export const StyledSelect = styled(Select)`
  &&{
    margin-top: 20px;
  }
`;

export const StyledHeader = styled(Typography)`
  &&{
    margin-top:${props => (props.gutterBottom ? '20px' : '0')};
    font-weight: 500;
  }
`;

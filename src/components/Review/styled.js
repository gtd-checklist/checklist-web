import styled from 'styled-components';


import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';

import { theme } from '../../ui/Themes';
import { StyledInput } from '../../ui/formStyled';

const { palette } = theme;

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root-107{
    background-color: transparent;
  }
`;

export const StyledPaper = styled(Paper)`
  &&{
      background-color: ${palette.surface.main};
      padding: 50px;
      box-shadow: 0 6px 10px 0 ${palette.shadow};
  }
`;

export const StyledDate = styled(Typography)`
  &&{
    color: ${palette.text.inverseLight};
    padding-bottom: 20px;
    @media (max-width: 960px) {
      padding-right: 20px;
    }
  }
`;

export const StyledInputReview = styled(StyledInput)`
  && {
    label, p{
      color: ${props => (props.err ? palette.error.main : palette.text.light)};
      font-weight: 500;
    }
  }
`;

export const StyledMobileStepper = styled(MobileStepper)`
  &&{
      background-color: transparent;
      display: inline-block;
      text-align: center;
      margin: 0 auto;
      bottom: 40px;
      color: ${palette.text.inverse};

      button{
        margin: 0 40px;
      }
  }
`;

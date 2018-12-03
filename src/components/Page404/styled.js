import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { theme } from '../../ui/Themes';

const { palette } = theme;

export const StyledFullHeight = styled(Grid)`
  min-height: 100%;
`;
export const StyledParagraph = styled(Typography)`
  text-align: center;
  padding: 20px 0;
  width: 50%;
  &&{
    color: ${palette.text.inverseLight};
  }

  @media (max-width: 960px) {
    width: 80%;
  }
`;

export const StyledGoHome = styled(Button)`
  &&{
      padding: 10px 20px;
      border-color: ${palette.border.inverse};
      border-radius: 20px;
      font-weight: 400;
      color: ${palette.text.inverseLight};
      margin-top: 60px;
      margin-bottom: 30px;
  }
`;

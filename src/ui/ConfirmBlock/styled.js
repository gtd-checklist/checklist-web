import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { theme } from '../Themes';

const { palette } = theme;

export const StyledHeaderOnDark = styled(Grid)`
&&{
  color: ${palette.text.light};
}
background-color: ${palette.surface.main};
box-shadow: 0 0 5px 2px ${palette.shadow};
padding: 20px;
border-radius: 10px;
`;

export const StyledCloseButton = styled(Button)`
&&{
    border-color: ${palette.border.main};
    border-radius: 20px;
    font-weight: 400;
    color: ${palette.text.light};
    margin-top: 30px;
}
`;

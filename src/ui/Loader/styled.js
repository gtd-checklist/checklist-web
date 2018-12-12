import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

export const StyledLoader = styled(CircularProgress)`
  ${props => (props.outline
    ? 'position:absolute; right:74px;'
    : 'margin-top: 40px;')}
`;

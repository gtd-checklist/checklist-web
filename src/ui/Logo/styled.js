import styled from 'styled-components';

import logoBig from '../../img/logo_big.png';
import logo from '../../img/logo.png';

export const Brand = styled.div`
  width: ${props => (props.navbar ? '120px' : '320px')};
  height: ${props => (props.navbar ? '30px' : '102px')};
  background-image: url('${props => (props.navbar ? logo : logoBig)}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.1s ease-in;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

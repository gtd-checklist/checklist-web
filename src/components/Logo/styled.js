import styled from 'styled-components';

import logo from '../../img/logo_big.png';

export const Brand = styled.div`
  width: 320px;
  height: 102px;
  background-image: url('${logo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.1s ease-in;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

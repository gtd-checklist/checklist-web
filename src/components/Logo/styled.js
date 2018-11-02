import styled from 'styled-components';

import lightScheme from '../../ui/Colors';

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const Brand = styled.div`
  font-family: 'Kalam', cursive;
  font-size: 3em;
  position: relative;
  transition: all 0.2s ease-in;

  :hover {
    cursor: pointer;
    color: ${lightScheme.Secondary};
  }

  :hover::after{
    width:76px;
    background-color: ${lightScheme.Secondary};
  }

  :after {
    content: '';
    display: inline-block;
    width:0px;
    height:4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    background-color: ${lightScheme.Surface};
    transition: all 0.3s ease-in-out;
  }
`;

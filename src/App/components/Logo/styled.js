import styled from 'styled-components';

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
    color: #3aa27f;
  }
  :hover::after{
    width:76px;
    background-color: #3aa27f;
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
    background-color: #000;
    transition: all 0.3s ease-in-out; 
  }
`;

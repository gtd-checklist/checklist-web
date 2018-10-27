import styled from 'styled-components';

export const StyledHellow = styled.h1`
  font-size: 20pt;
  text-align:center;

  :hover {
    color: blueviolet;
  }

  ::after {
    content: "Авторизация прошла успешно";
    display: block;
  }
`;

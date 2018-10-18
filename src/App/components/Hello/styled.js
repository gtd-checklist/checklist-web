import styled from 'styled-components';

export const StyledHellow = styled.h1`
  font-size: 20pt;

  :hover {
    color: blueviolet;
  }

  ::after {
    content: "Sample after content";
    display: block;
  }
`;

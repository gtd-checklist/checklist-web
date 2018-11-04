import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 16px;
    }
`;

export const StyledMainHeader = styled.h1`
    font-size: 2.2em;
    letter-spacing: 0.05em;
    font-weight: normal;
`;

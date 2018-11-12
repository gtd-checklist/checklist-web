import styled, { createGlobalStyle } from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const GlobalStyle = createGlobalStyle`
    html{
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    body {
        display: flex;
        flex-direction: column;
        flex: auto;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 16px;
    }
    .root{
        display: flex;
        flex-direction: column;
        flex: auto; 
    }
`;

export const StyledContent = styled(Grid)`
  @media (max-width: 960px) {
    min-height: 100%;
  }
`;

export const StyledMainHeader = styled.h1`
    text-align: center;
    font-size: 2.2em;
    letter-spacing: 0.05em;
    font-weight: 300;
    color: ${props => (props.color === 'onDark'
    ? props.theme.colors.OnSurface
    : props.theme.colors.OnOppositeSurface)};
`;

// transparent background image for different pages
export const BgImageTransparent = styled(Grid)`
    position: relative;
    background-color: ${props => (props.color === 'primary'
    ? props.theme.colors.PrimaryTransparent
    : props.theme.colors.SecondaryTransparent)};

    :before{
        content: "";
        background-image: url('${props => props.back}');
        background-position: center;
        background-size: cover;
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }
`;
// container for main app
export const StyledMainApp = styled(Grid)`
    box-sizing: border-box;
`;

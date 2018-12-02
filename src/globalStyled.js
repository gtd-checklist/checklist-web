import styled, { createGlobalStyle } from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { theme } from './ui/Themes';

const { palette } = theme;

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

export const StyledLogo = styled(Grid)`
  min-height: 300px;
`;

export const StyledTitle = styled(Typography)`
  flex: auto;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  padding-top: 20px;
  &&{
    font-size: 2.4em;
    font-weight: 300;
    color: ${props => (props.back === 'dark'
    ? palette.text.inverse
    : palette.text.main)};
  }

  :before{
    content: '${props => (props.year ? props.year : '')}';
    display: ${props => (props.year ? 'block' : 'none')};
    font-size: 0.6em;
  }
`;

// transparent background image for different pages
export const BgImageTransparent = styled(Grid)`
  flex: auto;
  position: relative;
  background-color: ${props => (props.color === 'primary'
    ? palette.primary.light
    : palette.secondary.light)};
  
  :before{
    content: "";
    background-image: url('${props => props.back}');
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

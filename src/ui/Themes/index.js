import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12,
    fontFamily: [
      '"Montserrat"',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      light: 'rgba(101, 99, 164, 0.5)',
      main: 'rgb(101, 99, 164)',
      surface: 'rgba(101, 99, 164, 0.7)'
    },
    secondary: {
      light: 'rgba(80, 210, 194, 0.7)',
      main: 'rgb(80, 210, 194)',
      surface: 'rgba(80, 210, 194, 0.7)'
    },
    surface: {
      light: 'rgba(29, 29, 39, 0.06)',
      main: 'rgb(255, 255, 255)',
      transparent: 'rgba(255, 255, 255, 0.4)'
    },
    text: {
      light: 'rgba(0, 0, 0, 0.6)',
      main: 'rgb(0, 0, 0)',
      inverse: 'rgb(255, 255, 255)',
      inverseLight: 'rgba(255, 255, 255, 0.8)'
    },
    error: {
      main: 'rgb(255, 51, 102)'
    },
    shadow: 'rgba(0, 0, 0, 0.1)',
    border: {
      main: 'rgba(0, 0, 0, 0.08)',
      inverse: 'rgba(255, 255, 255, 0.2)'
    }
  }
});

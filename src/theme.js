import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#536d9f',
      main: '#234270',
      dark: '#001c44',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6b62',
      main: '#ec3237',
      dark: '#b20010',
      contrastText: '#fff',
    },
  },
});

export default theme;

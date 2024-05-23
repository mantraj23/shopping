// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change to your primary color
    },
    secondary: {
      main: '#dc004e', // Change to your secondary color
    },
    background: {
      paper: '#fff',
      default: '#f5f5f5',
    },
    text: {
      primary: '#000',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;

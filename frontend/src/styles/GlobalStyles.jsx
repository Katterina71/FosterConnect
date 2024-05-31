// src/styles/GlobalStyles.js
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles styles={{

      '#root': {
        minHeight: '100vh',
        fontFamily: 'Nunito, sans-serif'
      },
      body: {
        margin: 0,
        padding: 0,
        
      },
      a: {
        textDecoration: 'none', 
        color: 'inherit' 
      },
      palette: {
        primary: {
          main: '#a5d6a7',
        },
        secondary: '#4caf50',
      },
    }} />
  );
};

export default GlobalStyles;

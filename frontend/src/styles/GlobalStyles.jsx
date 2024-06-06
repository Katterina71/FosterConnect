// src/styles/GlobalStyles.js
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles styles={{

      '#root': {
        minHeight: '100vh',
      },
      a: {
        textDecoration: 'none', 
        color: '90CCF4',
        fontWeight: '800' 
      },
    }} />
  );
};

export default GlobalStyles;

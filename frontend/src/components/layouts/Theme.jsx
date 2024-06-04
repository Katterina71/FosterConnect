import { createTheme} from '@mui/material'; 

const theme = createTheme({
    components: {
      // Global style overrides for all MUI components
      MuiButton: {
        styleOverrides: {
          root: { // Apply CSS for all buttons
            fontWeight: 'medium',
            textTransform: 'none',
            color: '#ffffff'
          },
        },
      },
    },
  
    typography: {
      // Define global font settings
      fontFamily: 'Nunito, sans-serif',
      body2: {
        color: '#220C04', 
      },
      h1: {
        color: '#DF744A',
        fontFamily: 'Signika Negative, sans-serif;',
        fontWeight: '600',
        fontSize: '60px',
      },
      h2: {
        color: '#DF744A',
        fontFamily: 'Signika Negative, sans-serif;',
        fontWeight: '600',
        fontSize: '40px',
      },


    },

    palette: {
      primary: {
        light: '#F7E9D6', //Apple core
        main: '#ECECEC', //Grey
        dark: '#90CCF4',
        contrastText: '#fff',
      },
      secondary: {
        light: '#6BBFAB', // Mint
        main: '#F7882F', // Apricot
        dark: '#687A87', //Blueberry color
        contrastText: '#000',
      },
    }
   
  });

 

  export default theme
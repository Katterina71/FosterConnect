import React from 'react'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'; 
import GlobalStyles from '../../styles/GlobalStyles'; 

const theme = createTheme({
    components: {
      // Global style overrides for all MUI components
      MuiButton: {
        styleOverrides: {
          root: { // Apply CSS for all buttons
            fontWeight: 'medium',
            textTransform: 'none',
          },
        },
      },
    },
    typography: {
      // Define global font settings
      fontFamily: 'Nunito, sans-serif',
      body2: {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
    palette: {
        primary: {
          main: '#81c784',
        },
        secondary: {
            main: '#4caf50'},
      },

  });



export default function Layout({children}) {
    return (
     
      <ThemeProvider theme={theme}>
          {/* Using GlobalStyles component */}
         <GlobalStyles />   
         {/* Helps to reset browser defaults */}
         <CssBaseline />  
         <Header />
              {children}
        <Footer />
      </ThemeProvider>
    )
  }
  
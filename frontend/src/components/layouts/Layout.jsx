
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import {ThemeProvider, CssBaseline } from '@mui/material'; 
import GlobalStyles from '../../styles/GlobalStyles'; 

import theme from './Theme';

import { AuthProvider } from '../../context/AuthContext';

 // Footer on the bottom of the page
 const containerStyle = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto', // Header, Content, Footer
  minHeight: '100vh',
};

export default function Layout({children}) {
    return (
    <div style={containerStyle}>
      <ThemeProvider theme={theme}>
          {/* Using GlobalStyles component */}
         <GlobalStyles />   
         {/* Helps to reset browser defaults */}
         <CssBaseline />  
         <AuthProvider><Header /></AuthProvider>
              {children}
        <Footer />
      </ThemeProvider>
     </div> 
    )
  }
  
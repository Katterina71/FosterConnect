import React from 'react';
import Box from '@mui/material/Box';

const footerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
  textAlign: 'center',
  marginTop: '40px'
};

function Footer() {
  return (
    <Box sx={footerStyle}>
      <p>© 2024 All Rights Reserved</p>
    </Box>
  );
}

export default Footer;


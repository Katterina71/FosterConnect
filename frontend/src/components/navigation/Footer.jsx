
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const footerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
  textAlign: 'center',
};

function Footer() {
  return (
    <Box sx={footerStyle}>
      <p>© 2024 All Rights Reserved</p>
      <Link to="/website-policy">Website Policy</Link>

    </Box>
  );
}

export default Footer;


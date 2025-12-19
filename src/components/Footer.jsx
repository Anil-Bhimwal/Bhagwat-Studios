import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = ({ config }) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography
          sx={{
            margin: 0,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          {config?.footer_text || '© 2024 Bhagwat Digital Studios. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;


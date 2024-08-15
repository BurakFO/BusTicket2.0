import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      className="bg-gray-800 text-white py-4 mt-8"
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={4} 
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" className="text-center">
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
            <Link href="/privacy" className="text-white hover:text-gray-400">
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

// Footer.js
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: '#333', // Dark background color
  color: '#fff', // Text color
  padding: '48px 0',
});

const FooterLink = styled(Link)({
  margin: '8px 12px',
  textDecoration: 'none',
  color: '#ccc', // Link color
  '&:hover': {
    color: '#fff', // Hover link color
  },
});

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <FooterLink href="#" variant="subtitle1">
              About Us
            </FooterLink>
            <FooterLink href="#" variant="subtitle1">
              Careers
            </FooterLink>
            <FooterLink href="#" variant="subtitle1">
              Contact Us
            </FooterLink>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <FooterLink href="#" variant="subtitle1">
              Blog
            </FooterLink>
            <FooterLink href="#" variant="subtitle1">
              Help Center
            </FooterLink>
            <FooterLink href="#" variant="subtitle1">
              Privacy Policy
            </FooterLink>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Social
            </Typography>
            <FooterLink href="#" variant="subtitle1">
              Facebook
            </FooterLink>
            <FooterLink href="#" variant="subtitle1">
              Twitter
            </FooterLink>
            <FooterLink href="#" variant="subtitle1">
              Instagram
            </FooterLink>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {'© '}
            <Link color="inherit" href="/">
              Campus Ebay
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

export default function About() {
  return (
    <Box m={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/">
        Go to the main page
      </Button>
    </Box>
  );
}

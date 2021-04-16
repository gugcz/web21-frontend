import React from 'react';
import Box from '@material-ui/core/Box';

export default function About() {
  return (
    <Box m={4}>
      <Box>Title with text - BIG</Box>
      <Box>image container</Box>
      <Box>Title with text - NORMAL</Box>
      <Box>Title with text and picture - LEFT</Box>
      <Box>Title with text and picture - RIGHT</Box>
      <Box>Title with text and picture and action - LEFT</Box>
      <Box>
        sponzoring
        <Box>scorecardy</Box>
        <Box>Title with text and picture and action - LEFT</Box>
      </Box>
      <Box>Partneři</Box>
    </Box>
  );
}

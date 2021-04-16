import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import NextLink from '../components/common/NextLink/NextLink';

export default function About() {
  return (
    <Box m={4}>
      <Box>headlineIntro</Box>
      <Box>filters</Box>
      <Box>
        events
        <Box>
          <Typography>Event info with link</Typography>
          <NextLink href={`/event/${encodeURIComponent('prvni-event')}`}>S odkazem do události</NextLink>
        </Box>
        <Box>
          <Typography>Event info with link</Typography>
          <NextLink href={`/event/${encodeURIComponent('druhy-event')}`}>S odkazem do události</NextLink>
        </Box>
        <Box>
          <Typography>Event info with link</Typography>
          <NextLink href={`/event/${encodeURIComponent('treti-event')}`}>S odkazem do události</NextLink>
        </Box>
        <Box>
          <Typography>Event info with link</Typography>
          <NextLink href={`/event/${encodeURIComponent('ctvrty-event')}`}>S odkazem do události</NextLink>
        </Box>
      </Box>
    </Box>
  );
}

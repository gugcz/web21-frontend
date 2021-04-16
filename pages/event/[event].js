import React from 'react';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';

export default function Event() {
  const router = useRouter();
  const { event } = router.query;

  //todo - load event info

  return (
    <Box m={4}>
      <Typography>Name from URL: {event}</Typography>
      <Box>
        <Box>
          Left
          <Box>Image</Box>
          <Box>Text</Box>
        </Box>
        <Box>
          right
          <Box>Title</Box>
          <Box>event details</Box>
          <Box>action</Box>
          <Box>map</Box>
          <Box>organizers - ignor for MVP</Box>
          <Box>link o sekci(písmenku)</Box>
        </Box>
      </Box>
      <Box> Next events </Box>
    </Box>
  );
}

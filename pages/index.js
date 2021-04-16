import { Box, makeStyles } from '@material-ui/core';
import { PartnersSection } from '../components/sections/PartnersSection/PartnersSection';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.root}>
      <Box>headlineIntro</Box>
      <Box>scorecards</Box>
      <Box>events</Box>
      <Box>connection</Box>
      <Box>písmenka</Box>
      <Box>Další písmenka</Box>
      <Box>Komunita</Box>
      <Box>Newsletter</Box>
      <PartnersSection />
    </Box>
  );
}

import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { NewsletterForm } from '../components/NesletterForm/NesletterForm';

const Chapter = ({ data }) => {
  return (
    <Box m={4}>
      <NewsletterForm />
    </Box>
  );
};

Chapter.propTypes = {
  data: PropTypes.exact({
    stats: PropTypes.object,
  }),
};

export async function getStaticProps() {
  return {};
}

export default Chapter;

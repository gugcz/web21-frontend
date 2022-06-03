import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { parse } from 'rss-to-json';
import { EventsPropTypes } from '../model/events.model';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Events = ({ posts }) => {
  const classes = useStyles();

  console.log(posts);
  return (
    <Box m={4} className={classes.root}>
      {posts.map((post) => (
        <h1 key={post.published}>{post.title}</h1>
      ))}
    </Box>
  );
};

Events.propTypes = {
  events: EventsPropTypes,
};

export async function getStaticProps() {
  const rss = await parse('https://medium.com/feed/@GUG.cz');

  return {
    props: { posts: JSON.parse(JSON.stringify(rss)).items },
  };
}

export default Events;

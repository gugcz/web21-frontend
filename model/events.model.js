import PropTypes from 'prop-types';

export const OrganizersPropTypes = PropTypes.exact({
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
});

export const EventPropType = PropTypes.exact({
  slug: PropTypes.string,
  chapterId: PropTypes.string,
  chapterName: PropTypes.string,
  chapterCode: PropTypes.string,
  eventName: PropTypes.string,
  date: PropTypes.string,
  address: PropTypes.string,
  intro: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  regLink: PropTypes.string,
  mdText: PropTypes.string,
  eventId: PropTypes.number,
  timeStart: PropTypes.string,
  timeEnd: PropTypes.string,
  organizers: PropTypes.arrayOf(OrganizersPropTypes),
});

export const EventsPropTypes = PropTypes.arrayOf(EventPropType);

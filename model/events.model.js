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

export const TalkBaseEventPropType = PropTypes.exact({
  title: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  userFriendlyUrl: PropTypes.string,
  type: PropTypes.oneOf(['ONLINE', 'HYBRID']),
  url: PropTypes.string,
  timezone: PropTypes.string,
  coverPhoto: PropTypes.shape({
    url: PropTypes.string,
    /* and many others */
  }),
  address: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    countryCode: PropTypes.string,
    houseNumber: PropTypes.string,
    externalId: PropTypes.string,
    externalUrl: PropTypes.string,
    formattedAddress: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    deletedAt: PropTypes.string,
  }),
});

export const EventsPropTypes = PropTypes.arrayOf(TalkBaseEventPropType);

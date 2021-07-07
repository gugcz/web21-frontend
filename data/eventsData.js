import { chapters, initiatives } from '../src/constants';

const events = [
  {
    card: {
      chapter: chapters.GDG_JIHLAVA,
      initiative: initiatives.GDG,
      eventName: 'Name',
      date: '',
      address: '',
      stag: 'name',
      intro: 'Dlouhý text',
      image: 'path/to/image',
    },
    detail: {
      chapter: chapters.GDG_JIHLAVA,
      initiative: initiatives.GDG,
      eventName: 'Name',
      date: '',
      location: '',
      stag: 'name',
      intro: 'Dlouhý text',
      mdText: 'Hodně dlouhý text v **markdownu**',
      image: 'path/to/image',
      organizers: [{ image: '', name: '', stag: '' }],
    },
  },
];

export default events;


import Homepage from '../Layout/Homepage/Homepage'
import DetailsPage from '../Layout/DetailsPage/DetailsPage';
import StoryPage from '../Layout/StoryPage/StoryPage';
import PartyPage from '../Layout/PartyPage/PartyPage';


/**
 * HOME | DETAILS | STORY | PARTY
 */

export default [
  {
    path: '/',
    component: Homepage,
    title: 'Home',
    x: 0,
    y: 0,
    isMobile: true
  },
  {
    path: '/details',
    component: DetailsPage,
    title: 'Details',
    x: 1,
    y: 0,
    isMobile: true
  },
  {
    path: '/story',
    component: StoryPage,
    title: 'Our Story',
    x: 2,
    y: 0,
    isMobile: true
  },
  {
    path: '/wedding-party',
    component: PartyPage,
    title: 'Wedding Party',
    x: 3,
    y: 0,
    isMobile: true
  },
];

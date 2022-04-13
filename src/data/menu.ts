import services from './services';

const menus = [
  // {
  //   id: 1,
  //   label: 'What We Offer',
  //   href: '/offers',
  // },
  {
    id: 2,
    label: 'Our Services',
    href: '#services',
    submenus: services,
  },
  {
    id: 3,
    label: 'About',
    href: '#about',
  },
  {
    id: 4,
    label: 'Contact Us',
    href: '#contact',
    isButton: true,
  },
];

export default menus;

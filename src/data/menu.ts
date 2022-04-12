const menus = [
  {
    id: 1,
    label: 'What We Offer',
    href: '/offers',
  },
  {
    id: 2,
    label: 'Our Services',
    href: '/services',
    submenus: [
      {
        id: 1,
        label: 'Playables',
        href: '/services/playables',
      },
      {
        id: 2,
        label: 'Animations',
        href: '/services/animations',
      },
      {
        id: 3,
        label: 'Video Ads',
        href: '/services/video-ads',
      },
    ],
  },
  {
    id: 3,
    label: 'Ad Network',
    href: '/network',
  },
  {
    id: 4,
    label: 'Contact Us',
    href: '/contact-us',
    isButton: true,
  },
];

export default menus;

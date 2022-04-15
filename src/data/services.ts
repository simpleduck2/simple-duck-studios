const services = [
  {
    id: 'playables',
    label: 'Playables',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/playables.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.png',
      // images: [
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.png',
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-2.png',
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-3.png',
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-4.png',
      // ],
      videos: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-2.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-3.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-4.mp4',
      ],
    },
    href: '/services/playables',
    row: 1,
  },
  {
    id: 'video-ads',
    label: 'Video Ads',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/video-ads.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/video-ads.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/video-ads.mp4',
    },
    href: '/services/video-ads',
    row: 2,
  },
  {
    id: 'storyboarding',
    label: 'Storyboarding',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/storyboarding.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding.png',
      images: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-1.jpg',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-2.jpg',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-6.jpg',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-7.jpg',
      ],
    },
    href: '/services/storyboarding',
    row: 3,
  },
  {
    id: 'app-video-ads',
    label: 'App Video Ads',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/app-video-ads.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/app-video-ads.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/app-video-ads.mp4',
    },
    href: '/services/app-video-ads',
    row: 1,
  },
  {
    id: '3d-videos',
    label: '3D Videos',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/3d-videos.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/3d-videos.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/3d-videos.mp4',
    },
    href: '/services/3d-videos',
    row: 2,
  },
  {
    id: 'brand-guidelines',
    label: 'Brand Guidelines',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/brand-guidelines.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/brand-guidelines.png',
    },
    href: '/services/brand-guidelines',
    row: 3,
  },
  {
    id: 'lyric-video',
    label: 'Lyric Video',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/lyric-video.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/lyric-video.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/lyric-video.mp4',
    },
    href: '/services/lyric-video',
    row: 1,
  },
  {
    id: 'live-videos',
    label: 'Live Videos',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/live-videos.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/live-videos.png',
      videos: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/live-videos-1.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/live-videos-2.mp4',
      ],
    },
    href: '/services/live-videos',
    row: 2,
  },
  {
    id: 'promo-gifs',
    label: 'Promo GIFS',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/promo-gifs.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/promo-gifs.gif',
    },
    href: '/services/promo-gifs',
    row: 3,
  },
  {
    id: 'animations',
    label: 'Animations',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/animations.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations.png',
      videos: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations-1.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations-2.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations-3.mp4',
      ],
    },
    href: '/services/animations',
    row: 2,
  },
  {
    id: 'rap-ads',
    label: 'Rap Ads',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/rap-ads.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/rap-ads.png',
    },
    href: '/services/rap-ads',
    row: 3,
  },
];

export default services;

/* eslint-disable import/no-extraneous-dependencies */
import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/scale.css';
import Marquee from 'react-fast-marquee';
import { followCursor } from 'tippy.js';

import { Background } from '@components/background';

const Services = () => {
  const items = [
    {
      id: 1,
      label: 'Playables',
      href: '/services/playables',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 1,
    },
    {
      id: 2,
      label: 'App Video Ads',
      href: '/services/app-video-ads',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 1,
    },
    {
      id: 3,
      label: 'Lyric Video ',
      href: '/services/lyric-video',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 1,
    },

    {
      id: 4,
      label: 'Animations',
      href: '/services/animations',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 2,
    },
    {
      id: 5,
      label: 'Video Ads',
      href: '/services/video-ads',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 2,
    },
    {
      id: 6,
      label: '3D Videos',
      href: '/services/3d-videos',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 2,
    },
    {
      id: 7,
      label: 'Live Videos',
      href: '/services/live-videos',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 2,
    },

    {
      id: 8,
      label: 'Rap Ads',
      href: '/services/rap-ads',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 3,
    },
    {
      id: 9,
      label: 'Storyboarding',
      href: '/services/storyboarding',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 3,
    },
    {
      id: 10,
      label: 'Brand Guidelines',
      href: '/services/brand-guidelines',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 3,
    },
    {
      id: 11,
      label: 'Promo GIFs',
      href: '/services/promo-gifs',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/services-dummy.png',
      row: 3,
    },
  ];

  const getItemsFromRow = (rowNumber: number) => {
    return items.filter((item) => item.row === rowNumber);
  };

  const rows = [
    {
      number: 1,
      className: {
        wrapper: 'gap-0',
        item: 'w-1/3',
      },
      speed: 50,
    },
    {
      number: 2,
      className: {
        wrapper: 'gap-20',
        item: 'w-1/4',
      },
      speed: 40,
    },
    {
      number: 3,
      className: {
        wrapper: 'gap-0',
        item: 'w-1/4',
      },
      speed: 60,
    },
  ];

  return (
    <Background color="bg-black">
      {/* <Section> */}
      <div className="relative min-h-[720px] flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[64px] font-bold mb-8">Our Services</h1>

        {rows.map((row) => (
          <Marquee key={row.number} gradient={false} speed={row.speed}>
            <div className={`flex w-full py-12 ${row.className.wrapper}`}>
              {getItemsFromRow(row.number).map((item: any) => (
                <div key={item.id} className={row.className.item}>
                  <Tippy
                    content={
                      <img
                        src={`https://picsum.photos/id/${item.id}/300/300`}
                        alt=""
                        className="w-[240px] h-[240px] max-w-none rounded-full transition all duration-200"
                      />
                    }
                    followCursor={true}
                    animation="scale"
                    plugins={[followCursor]}
                  >
                    <h4 className="text-[32px] inline-block hover:text-primary transition all duration-200">
                      {item.label}
                    </h4>
                  </Tippy>
                </div>
              ))}
            </div>
          </Marquee>
        ))}
      </div>
      {/* </Section> */}
    </Background>
  );
};

export default Services;

import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/scale.css';
import Marquee from 'react-fast-marquee';
import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { services } from '@data/index';

const Services = () => {
  const getItemsFromRow = (rowNumber: number) => {
    return services.filter((item) => item.row === rowNumber);
  };

  const rows = [
    {
      number: 1,
      speed: 50,
    },
    {
      number: 2,
      speed: 40,
    },
    {
      number: 3,
      speed: 60,
    },
  ];

  return (
    <Background id="services" color="bg-black py-16 lg:py-0">
      {/* <Section> */}
      <div className="relative lg:min-h-[720px] flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold mb-8">
          Our Services
        </h1>

        {rows.map((row) => (
          <Marquee key={row.number} gradient={false} speed={row.speed}>
            <div className={`flex w-full py-8 lg:py-12 justify-around `}>
              {getItemsFromRow(row.number).map((item: any) => (
                <div key={item.id} className="mx-8">
                  <Tippy
                    content={
                      <img
                        src={item.asset.image}
                        alt=""
                        className="w-40 lg:w-60 aspect-square max-w-none rounded-full transition all duration-200"
                      />
                    }
                    followCursor={true}
                    animation="scale"
                    plugins={[followCursor]}
                  >
                    <h4 className="text-xl sm:text-2xl lg:text-[32px] inline-block hover:text-primary transition all duration-200">
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

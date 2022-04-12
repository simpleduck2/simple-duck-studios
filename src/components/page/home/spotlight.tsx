import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { Section } from '@components/layout';

const Spotlight = () => {
  const features = [
    'Playable & support on all major platform',
    'Optimize & boots your ad performance',
    'Drive user engagement',
  ];

  return (
    <Section yPadding="py-20">
      <div className="relative flex gap-20">
        <div className="w-7/12">
          <h3 className="text-[32px] font-bold">
            Maximaze your business growth with
          </h3>
          <h1 className="text-[64px] font-bold text-secondary mb-8">
            Playable Ads
          </h1>
          <p className="text-lg text-gray-500">
            Our speciality, Playable Ads drive revenue and retention through its
            intractivity. Your potential users can experience your mobile game,
            app, brand & product through it. By simply tapping & dragging the ad
            content, this interactive advertisement format lets users experience
            core app functionality.
          </p>
          <ul className="mt-10">
            {features.map((item, idx) => (
              <li key={idx} className="text-2xl flex items-center gap-4 mt-4">
                <BsFillCheckCircleFill color="#26CD7D" size={14} /> {item}
              </li>
            ))}
          </ul>
          <div className="flex mt-10">
            <Link href={'/portfolio'} passHref>
              <a className="text-lg bg-primary px-6 py-4 rounded-full">
                View Portfolio
              </a>
            </Link>
          </div>
        </div>

        <div className="w-5/12 flex flex-col gap-10">
          <div>
            <img
              src="https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.png"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl w-full"
              alt=""
            />
          </div>
          <div className="flex gap-10">
            <div className="w-1/2">
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/services/playable-4.png"
                className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl w-full"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/services/playable-2.png"
                className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Spotlight;

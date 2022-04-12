import React from 'react';

import { CgArrowLongLeft } from 'react-icons/cg';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Banner = () => {
  const texts = [
    {
      first: 'We do',
      second: 'Creatives',
      third: 'for Mobile Gaming and Apps',
      fourth: '',
    },
    {
      first: 'We do',
      second: 'Campaigns',
      third: 'for Mobile Gaming and Apps',
      fourth: '',
    },
    {
      first: 'We do',
      second: 'Video Ads',
      third: 'for Mobile Gaming and Apps',
      fourth: '',
    },
    {
      first: 'We do',
      second: 'Branding',
      third: 'for Mobile Gaming and Apps',
      fourth: '',
    },
  ];

  const [text, setText] = React.useState(texts[0]);
  const [isTextShown, setIsTextShown] = React.useState(true);

  let i = 0;
  React.useEffect(() => {
    const intervalId = setInterval(async () => {
      setIsTextShown(false);
      setText(texts[i]);
      if (i < texts.length - 1) {
        i += 1;
      } else {
        i = 0;
      }
      setTimeout(() => {
        setIsTextShown(true);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // #endregion

  return (
    <Background color="bg-white" className="relative">
      <div className="absolute bottom-16 left-2 items-center gap-4 -rotate-90 hidden">
        <div>
          <CgArrowLongLeft size={20} />
        </div>
        Scroll
      </div>

      <Section className="">
        <div className="relative h-full flex flex-col justify-center z-[1] py-6">
          <h1 className="text-4xl sm:text-6xl xl:text-8xl font-bold text-center">
            {text?.first}{' '}
            <Fade left duration={750} cascade when={isTextShown}>
              <span
                className={`hover:text-secondary underlined underlined-waved transition-all duration-200`}
              >
                {text?.second}
              </span>
            </Fade>
          </h1>
          <h2 className="text-2xl sm:text-4xl xl:text-6xl font-bold mt-4 sm:mt-6 xl:mt-8 mb-20 text-center">
            {text?.third}
          </h2>

          <img
            src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/3d-videos.svg"
            alt=""
            className="absolute right-32 top-0 w-[40px] -z-[1] -rotate-[30deg] opacity-50"
          />
          <img
            src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/animation.svg"
            alt=""
            className="absolute left-0 top-20 w-[50px] -z-[1] -rotate-[30deg] opacity-50"
          />
          <img
            src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/playables.svg"
            alt=""
            className="absolute right-0 top-40 w-[30px] -z-[1] opacity-50"
          />
          <img
            src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/video-ads.svg"
            alt=""
            className="absolute left-[45%] top-64 w-[50px] -z-[1] rotate-[15deg] opacity-50"
          />
        </div>

        <style jsx>
          {`
            @keyframes movemask {
              0% {
                -webkit-mask-position: 0 0;
                mask-position: 0 0;
              }

              to {
                -webkit-mask-position: 114px 0;
                mask-position: 114px 0;
              }
            }
            .underlined {
              position: relative;
            }

            .underlined:after,
            .underlined:before {
              position: absolute;
              width: 100%;
              height: 11px;
              bottom: 10px;
              left: 0;
              background: #000;
              content: '';
            }
            .underlined:after {
              width: 0;
              transition: all 0.6s;
              background: #0083ff;
            }

            .underlined:before {
              opacity: 0.2;
            }

            .underlined:hover:after,
            .underlined:hover:before {
              -webkit-animation: movemask 2s linear infinite;
              animation: movemask 2s linear infinite;
            }

            .underlined:hover:after {
              width: 100%;
              transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
              background: #0083ff;
            }
            .underlined-waved:after,
            .underlined-waved:before {
              bottom: 0px !important;
              -webkit-mask: url(https://derrint.sirv.com/Images/simple-duck-studios/home/underline-waved.svg);
              mask: url(https://derrint.sirv.com/Images/simple-duck-studios/home/underline-waved.svg);
            }
          `}
        </style>
      </Section>
    </Background>
  );
};

export default Banner;

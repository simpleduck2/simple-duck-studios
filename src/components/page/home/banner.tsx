import React from 'react';

import { Fade } from 'react-reveal';

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
    <Section>
      <div className="relative min-h-[720px] flex flex-col justify-center">
        <h1 className="text-8xl font-bold">
          {text?.first}{' '}
          <Fade left duration={750} cascade when={isTextShown}>
            <span
              className={`hover:text-secondary underlined underlined-waved transition-all duration-200`}
            >
              {text?.second}
            </span>
          </Fade>
        </h1>
        <h2 className="text-6xl font-bold mt-8 mb-40">{text?.third}</h2>
        <img
          src="https://derrint.sirv.com/Images/simple-duck-studios/home/banner-phone.png"
          alt=""
          className="absolute right-0 top-1/2 h-[500px] -translate-y-1/2"
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
  );
};

export default Banner;

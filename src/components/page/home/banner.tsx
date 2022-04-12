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
        <h1 className="text-8xl">
          {text?.first}{' '}
          <Fade left duration={750} cascade when={isTextShown}>
            <span
              className={`text-secondary underline decoration-wavy underline-offset-8 decoration-1 transition ease-in-out duration-200 `}
            >
              {text?.second}
            </span>
          </Fade>
        </h1>
        <h2 className="text-6xl mt-5 mb-40">{text?.third}</h2>
        <img
          src="https://derrint.sirv.com/Images/simple-duck-studios/home/banner-phone.png"
          alt=""
          className="absolute right-0 top-1/2 h-[500px] -translate-y-1/2"
        />
      </div>
    </Section>
  );
};

export default Banner;

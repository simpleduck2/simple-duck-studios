import React from 'react';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      sender: 'Genna Gardeman, Sr. Product Marketing Manager',
      message:
        'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. Thank you',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/testimonials/logo-candywriter.png',
    },
  ];
  return (
    <Background color="bg-primary" className="overflow-hidden">
      <Section>
        <div className="relative pb-10 flex flex-col justify-center items-center text-center gap-1 lg:gap-4">
          {/* <h3 className="text-lg sm:text-2xl">What we offer</h3> */}
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] lg:leading-[64px] font-bold mb-0">
            Testimonials&quot;
          </h1>
          <p className="lg:text-lg lg:w-2/3">See what people are saying</p>

          <div className="flex items-center justify-center sm:flex-row w-full gap-8 mt-8 sm:mt-8 lg:mt-10 z-[1]">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`max-w-[600px] bg-white rounded-3xl px-10 py-12 rounded-br-none flex flex-col items-center relative 
                after:content-[''] 
                after:absolute 
                after:-z-[1] 
                after:bottom-0 
                after:bg-black 
                after:opacity-10 
                after:-right-[14%] 
                  md:after:-right-[15%] 
                  lg:after:-right-[18%] 
                after:h-[70%] 
                after:w-[75%] 
                  lg:after:w-[85%] 
                after:skew-x-[315deg]
                `}
              >
                <img
                  src={item.asset}
                  alt=""
                  className="h-12 lg:h-16 aspect-auto max-w-none"
                />
                <p className="lg:text-lg mt-8">{item.message}</p>
                <h4 className="text-gray-500 mt-8">{item.sender}</h4>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default Testimonials;

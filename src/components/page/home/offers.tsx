import { Background } from '@components/background';
import { Section } from '@components/layout';

const Offers = () => {
  const offers = [
    {
      id: 1,
      label: 'Engage your audience',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/offers-flash.png',
    },
    {
      id: 2,
      label: 'Obtain quality users',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/offers-user.png',
    },
    {
      id: 3,
      label: 'Optimize conversion',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/offers-tools.png',
    },
  ];
  return (
    <Background color="bg-primary">
      <Section>
        <div className="relative min-h-[720px] flex flex-col justify-center items-center text-center overflow-hidden">
          <h3 className="text-2xl mb-3">What we offer</h3>
          <h1 className="text-[64px] font-bold mb-3">
            Increase your performance & growth
          </h1>
          <p className="text-lg">
            We produce high quality video ads, static banners and playables to
            reach your target audience and your business growth. We design the
            creative concept with our expertise & knowledge of mobile games &
            apps marketing.
          </p>

          <div className="flex w-full gap-8 mt-20 z-[1]">
            {offers.map((item) => (
              <div
                key={item.id}
                className={`w-1/3 bg-white rounded-3xl px-10 py-8 rounded-br-none flex flex-col items-center offer-box relative ${
                  item.id === 2 ? 'mt-5 -mb-5' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[64px] h-[64px] max-w-none"
                />
                <h4 className="text-lg mt-4">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>

        <style jsx>
          {`
            .offer-box::before {
              content: '';
              position: absolute;
              z-index: -1;
              bottom: 0;
              background: #000000;
              opacity: 0.1;
              right: -16%;
              height: 70%;
              width: 85%;

              -webkit-transform: skewX(315deg);
              -ms-transform: skewX(315deg);
              transform: skewX(315deg);
            }
          `}
        </style>
      </Section>
    </Background>
  );
};

export default Offers;

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Offers = () => {
  return (
    <Background color="bg-primary">
      <Section>
        <div className="relative min-h-[720px] flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl mb-3">What we offer</h3>
          <h1 className="text-[64px] mb-3">
            Increase your performance & growth
          </h1>
          <p className="text-lg">
            We produce high quality video ads, static banners and playables to
            reach your target audience and your business growth. We design the
            creative concept with our expertise & knowledge of mobile games &
            apps marketing.
          </p>

          <div className="flex w-full gap-8 mt-20">
            <div className="w-1/3 bg-white rounded-3xl px-10 py-6 rounded-br-none flex flex-col items-center">
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/home/offers-flash.png"
                alt=""
                className="w-[64px] h-[64px] max-w-none"
              />
              <h4 className="text-lg mt-4">Engage your audience</h4>
            </div>

            <div className="w-1/3 bg-white rounded-3xl px-10 py-6 rounded-br-none flex flex-col items-center mt-5 -mb-5">
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/home/offers-user.png"
                alt=""
                className="w-[64px] h-[64px] max-w-none"
              />
              <h4 className="text-lg mt-4">Obtain quality users</h4>
            </div>

            <div className="w-1/3 bg-white rounded-3xl px-10 py-6 rounded-br-none flex flex-col items-center">
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/home/offers-tools.png"
                alt=""
                className="w-[64px] h-[64px] max-w-none"
              />
              <h4 className="text-lg mt-4">Optimize conversion</h4>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default Offers;

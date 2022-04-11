import { Background } from '@components/background';
import { Section } from '@components/layout';

const Home = () => {
  return (
    <>
      <Section>
        {/* ----- BANNER ----- */}
        <div className="relative min-h-[720px] flex flex-col justify-center">
          <h1 className="text-8xl">
            We do{' '}
            <span className="text-secondary underline decoration-wavy underline-offset-8 decoration-1">
              Creatives
            </span>
          </h1>
          <h2 className="text-6xl mt-5 mb-40">for Mobile Gaming and Apps</h2>
          <img
            src="https://derrint.sirv.com/Images/simple-duck-studios/home/banner-phone.png"
            alt=""
            className="absolute right-0 top-1/2 h-[500px] -translate-y-1/2"
          />
        </div>

        {/* ----- ABOUT ----- */}
        <div className="relative min-h-[720px]">
          <div>
            <div className="w-1/2">
              <h3 className="text-[32px] mb-3">
                Simple Duck is your go-to partner in creative ads
              </h3>
              <p className="text-lg text-gray-500">
                We produce high quality video ads, static banners and playables
                to reach your target audience and your business growth. We
                design the creative concept with our expertise & knowledge of
                mobile games & apps marketing.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-20">
            <div className="w-3/4 bg-black rounded-full pr-20 py-12 pl-32 rounded-tl-none">
              <h3 className="text-4xl text-white mb-5">
                We&lsquo;ve helped more than 100 campaigns and drive their
                success
              </h3>
              <p className="text-2xl text-primary">Now, it’s your turn...</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ----- OFFERS ----- */}
      <Background color="bg-primary">
        <Section>
          {/* ----- OFFERS ----- */}
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
    </>
  );
};

export default Home;

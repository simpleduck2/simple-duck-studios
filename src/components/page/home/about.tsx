import { Section } from '@components/layout';

const About = () => {
  return (
    <Section yPadding="py-32">
      <div className="relative flex flex-col justify-center z-[1]">
        <div>
          <div className="w-full sm:w-2/3 lg:w-1/2">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-3">
              Simple Duck is your go-to partner in creative ads
            </h3>
            <p className="lg:text-lg text-gray-500">
              We produce high quality video ads, static banners and playables to
              reach your target audience and your business growth. We design the
              creative concept with our expertise & knowledge of mobile games &
              apps marketing.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-10 lg:mt-20">
          <div className="w-fit bg-black rounded-[32px] sm:rounded-[64px] lg:rounded-full rounded-tl-none sm:rounded-tl-none lg:rounded-tl-none px-6 sm:px-16 lg:px-20 py-4 sm:py-8 lg:py-12 flex flex-col items-end">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-5">
              <span className="block sm:inline">
                We&lsquo;ve helped more than{' '}
              </span>
              <span>100 campaigns</span>
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/home/underline-yellow.svg"
                alt="underline"
                className="absolute sm:right-16 lg:right-20 lg:pt-1 w-[145px] sm:w-[175px] lg:w-[260px]"
              />
              <span className="inline sm:block"> and drive their success</span>
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary">
              Now, it’s your turn...
            </p>
          </div>
        </div>

        <img
          src="https://derrint.sirv.com/Images/simple-duck-studios/home/wave-1.svg"
          alt=""
          className="absolute right-32 top-10 w-[80px] -z-[1]"
        />

        <img
          src="https://derrint.sirv.com/Images/simple-duck-studios/home/wave-2.svg"
          alt=""
          className="absolute bottom-10 left-40 w-[80px] -z-[1]"
        />
      </div>
    </Section>
  );
};

export default About;

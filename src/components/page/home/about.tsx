import { Section } from '@components/layout';

const About = () => {
  return (
    <Section>
      <div className="relative lg:min-h-[720px] flex flex-col justify-center">
        <div>
          <div className="w-2/3 lg:w-1/2">
            <h3 className="text-2xl lg:text-[32px] font-bold mb-3">
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

        <div className="flex justify-end mt-20">
          <div className="w-fit bg-black rounded-full pr-16 lg:pr-20 py-8 lg:py-12 pl-16 lg:pl-24 rounded-tl-none flex flex-col items-end">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-5">
              We&lsquo;ve helped more than 100 campaigns
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/home/underline-yellow.svg"
                alt="underline"
                className="absolute right-16 lg:right-20 lg:pt-1 w-[175px] lg:w-[260px]"
              />
              <br />
              and drive their success
            </h3>
            <p className="text-xl lg:text-2xl text-primary">
              Now, it’s your turn...
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

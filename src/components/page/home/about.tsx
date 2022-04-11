import { Section } from '@components/layout';

const About = () => {
  return (
    <Section>
      <div className="relative min-h-[720px]">
        <div>
          <div className="w-1/2">
            <h3 className="text-[32px] mb-3">
              Simple Duck is your go-to partner in creative ads
            </h3>
            <p className="text-lg text-gray-500">
              We produce high quality video ads, static banners and playables to
              reach your target audience and your business growth. We design the
              creative concept with our expertise & knowledge of mobile games &
              apps marketing.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-20">
          <div className="w-3/4 bg-black rounded-full pr-20 py-12 pl-32 rounded-tl-none">
            <h3 className="text-4xl text-white mb-5">
              We&lsquo;ve helped more than 100 campaigns and drive their success
            </h3>
            <p className="text-2xl text-primary">Now, it’s your turn...</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

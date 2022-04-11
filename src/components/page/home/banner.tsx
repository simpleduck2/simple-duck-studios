import { Section } from '@components/layout';

const Banner = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default Banner;

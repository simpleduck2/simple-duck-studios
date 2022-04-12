import {
  Banner,
  About,
  Offers,
  Services,
  Spotlight,
  AdNetwork,
  ContactUs,
  Portfolio,
} from '@components/page/home';

const Home = () => {
  return (
    <>
      <Banner />
      <Portfolio />
      <About />
      <Offers />
      <Services />
      <Spotlight />
      <AdNetwork />
      <ContactUs />
    </>
  );
};

export default Home;

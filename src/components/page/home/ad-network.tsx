import { Background } from '@components/background';

const AdNetwork = () => {
  const networks = [
    'https://derrint.sirv.com/Images/simple-duck-studios/home/network-facebook.png',
    'https://derrint.sirv.com/Images/simple-duck-studios/home/network-google.png',
    'https://derrint.sirv.com/Images/simple-duck-studios/home/network-applovin.png',
    'https://derrint.sirv.com/Images/simple-duck-studios/home/network-tiktok.png',
    'https://derrint.sirv.com/Images/simple-duck-studios/home/network-ironsource.png',
    'https://derrint.sirv.com/Images/simple-duck-studios/home/network-vungle.png',
  ];

  return (
    <Background
      color="bg-white"
      className="bg-[url('https://derrint.sirv.com/Images/simple-duck-studios/home/network-bg.svg')] bg-cover py-8 lg:py-0"
    >
      <div className="relative lg:min-h-[360px] flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl lg:text-[32px] font-bold mb-3">Ad Network</h1>
        <p className="lg:text-lg text-gray-500">
          We support various kind of networks and localizations around the
          globe.
        </p>

        <div className="flex w-full gap-10 my-10 justify-center">
          {networks.map((item, idx) => (
            <div key={idx} className="">
              <img
                src={item}
                alt=""
                className="aspect-auto h-[30px] lg:h-[40px] max-w-none"
              />
            </div>
          ))}
        </div>

        <p className="lg:text-lg text-gray-500">and more...</p>
      </div>

      <style jsx>
        {`
          .jempol-gajah {
            color: white;
            background: repeating-linear-gradient(
              24deg,
              #ff0 1px,
              transparent 3px,
              transparent 20px
            );
          }
        `}
      </style>
    </Background>
  );
};

export default AdNetwork;

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
    <Background color="bg-gradient-to-b from-white">
      <div className="relative min-h-[360px] flex flex-col justify-center items-center text-center">
        <h1 className="text-[32px] mb-3">Ad Network</h1>
        <p className="text-lg text-gray-500">
          We support various kind of networks and localizations around the
          globe.
        </p>

        <div className="flex w-full gap-10 my-10 justify-center">
          {networks.map((item, idx) => (
            <div key={idx} className="">
              <img
                src={item}
                alt=""
                className="aspect-auto h-[40px] max-w-none"
              />
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-500">and more...</p>
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

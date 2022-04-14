import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { isSafari, isIOS } from 'react-device-detect';
import Marquee from 'react-fast-marquee';

import { Background } from '@components/background';
import { Section } from '@components/layout';
import { services } from '@data/index';

const Services = () => {
  const router = useRouter();
  const currentId = router?.query?.id?.[0];
  const [currentService, setCurrentService] = React.useState(null as any);

  React.useEffect(() => {
    const cs = services.find((x) => x.id === currentId);
    setCurrentService(cs);
    console.log(cs?.asset?.video);

    return () => {};
  }, [currentId]);

  const getItemsFromRow = (rowNumber: number) => {
    return services.filter((item) => item.row === rowNumber);
  };

  const rows = [
    {
      number: 1,
      speed: 50,
    },
    {
      number: 2,
      speed: 40,
    },
    {
      number: 3,
      speed: 60,
    },
  ];

  const videoParentRef = React.useRef() as any;
  const [shouldUseImage, setShouldUseImage] = React.useState(false);

  React.useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari && isIOS && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute('muted', ''); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none';
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return (
    <Background
      id="services"
      color="white"
      className="relative py-16 mt-[88px] md:mt-[96px] lg:mt-[112px]"
    >
      <div className="relative lg:min-h-[720px] flex flex-col justify-center items-center text-center ">
        <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold mb-8">
          Our Services
        </h1>

        {rows.map((row) => (
          <Marquee key={row.number} gradient={false} speed={row.speed}>
            <div className={`flex w-full py-4 lg:py-8 justify-around `}>
              {getItemsFromRow(row.number).map((item: any) => (
                <div key={item.id} className="mx-8">
                  <Link href={item.href}>
                    <a>
                      <h4
                        className={`text-xl sm:text-2xl inline-block hover:text-secondary transition all duration-200 ${
                          item.id === currentId ? 'text-secondary' : ''
                        }`}
                      >
                        {item.label}
                      </h4>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </Marquee>
        ))}

        <Section className="">
          {!currentService?.asset?.video &&
            !currentService?.asset?.videos &&
            !currentService?.asset?.images && (
              <img
                src={currentService?.asset?.image}
                alt=""
                className="rounded-3xl max-h-[480px]"
              />
            )}

          {currentService?.asset?.images && (
            <div className="grid grid-cols-2 gap-5 lg:gap-10">
              {currentService?.asset?.images.map((image: any, idx: number) => (
                <img
                  key={idx}
                  src={image}
                  alt=""
                  className="rounded-3xl max-h-[480px]"
                />
              ))}
            </div>
          )}

          {currentService?.asset?.video && (
            <>
              {shouldUseImage ? (
                <img src={currentService?.asset?.image} alt="Muted Video" />
              ) : (
                <div
                  className=""
                  ref={videoParentRef}
                  dangerouslySetInnerHTML={{
                    __html: `
                  <video
                    loop
                    muted
                    autoplay
                    playsinline
                    preload="metadata"
                    class="rounded-3xl max-h-[480px]"
                  >
                  <source src="${currentService?.asset?.video}" type="video/mp4" />
                  </video>`,
                  }}
                />
              )}
            </>
          )}

          {currentService?.asset?.videos && currentService.id === 'animations' && (
            <>
              {shouldUseImage ? (
                <img src={currentService?.asset?.image} alt="Muted Video" />
              ) : (
                <div className="flex items-center justify-center w-full gap-5 lg:gap-10">
                  <div
                    className="flex justify-center"
                    ref={videoParentRef}
                    dangerouslySetInnerHTML={{
                      __html: `
                        <video
                          loop
                          muted
                          autoplay
                          playsinline
                          preload="metadata"
                          class="rounded-3xl max-h-[720px]"
                        >
                        <source src="${currentService?.asset?.videos[0]}" type="video/mp4" />
                        </video>`,
                    }}
                  />
                  <div className="flex flex-col gap-5 lg:gap-10">
                    <div
                      className=""
                      ref={videoParentRef}
                      dangerouslySetInnerHTML={{
                        __html: `
                          <video
                            loop
                            muted
                            autoplay
                            playsinline
                            preload="metadata"
                            class="rounded-3xl max-h-[340px]"
                          >
                          <source src="${currentService?.asset?.videos[1]}" type="video/mp4" />
                          </video>`,
                      }}
                    />
                    <div
                      className=""
                      ref={videoParentRef}
                      dangerouslySetInnerHTML={{
                        __html: `
                          <video
                            loop
                            muted
                            autoplay
                            playsinline
                            preload="metadata"
                            class="rounded-3xl max-h-[340px]"
                          >
                          <source src="${currentService?.asset?.videos[2]}" type="video/mp4" />
                          </video>`,
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {currentService?.asset?.videos &&
            currentService.id === 'live-videos' && (
              <>
                {shouldUseImage ? (
                  <img src={currentService?.asset?.image} alt="Muted Video" />
                ) : (
                  <div className="flex items-center justify-center w-full gap-5 lg:gap-10">
                    {currentService?.asset?.videos.map(
                      (video: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex justify-center"
                          ref={videoParentRef}
                          dangerouslySetInnerHTML={{
                            __html: `
                          <video
                            loop
                            muted
                            autoplay
                            playsinline
                            preload="metadata"
                            class="rounded-3xl max-h-[720px]"
                          >
                          <source src="${video}" type="video/mp4" />
                          </video>`,
                          }}
                        />
                      )
                    )}
                  </div>
                )}
              </>
            )}
        </Section>
      </div>
    </Background>
  );
};

export default Services;

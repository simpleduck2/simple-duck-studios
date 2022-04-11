import Image from 'next/image';
import Link from 'next/link';

import { Background } from '@components/background';
import { DropdownMenu } from '@components/dropdown';
import { Section } from '@components/layout';
import { NavbarTwoColumns } from '@components/navigation/NavbarTwoColumns';
import Logo from '@images/logos/logo-sds.png';

const Header = () => {
  const menus = [
    {
      id: 1,
      label: 'What We Offer',
      href: '/offers',
    },
    {
      id: 2,
      label: 'Our Services',
      href: '/services',
      submenus: [
        {
          id: 1,
          label: 'Playables',
          href: '/services/playables',
        },
        {
          id: 2,
          label: 'Animations',
          href: '/services/animations',
        },
        {
          id: 3,
          label: 'Video Ads',
          href: '/services/video-ads',
        },
      ],
    },
    {
      id: 3,
      label: 'Ad Network',
      href: '/network',
    },
    {
      id: 4,
      label: 'Contact Us',
      href: '/contact-us',
    },
  ];

  return (
    <Background color="bg-white">
      <Section yPadding="py-6" isHeader>
        <NavbarTwoColumns
          logo={<Image src={Logo} alt="" height={33} width={164} />}
        >
          {menus.map(({ id, label, href, submenus }: any) => (
            <li key={id}>
              <div className="text-right">
                {submenus ? (
                  <DropdownMenu
                    title={label}
                    items={submenus}
                    onChange={(v: any) => console.log(v)}
                  />
                ) : (
                  <Link href={href} passHref>
                    <a className="text-lg">{label}</a>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export { Header };

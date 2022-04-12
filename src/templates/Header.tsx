import Image from 'next/image';
import Link from 'next/link';

import { Background } from '@components/background';
import { DropdownMenu } from '@components/dropdown';
import { Section } from '@components/layout';
import { NavbarTwoColumns } from '@components/navigation/NavbarTwoColumns';
import { menus } from '@data/index';
import Logo from '@images/logos/logo-sds.svg';

const Header = () => {
  return (
    <Background color="bg-white">
      <Section yPadding="py-6" isHeader>
        <NavbarTwoColumns logo={<Image src={Logo} alt="" />}>
          {menus.map(({ id, label, href, submenus, isButton }: any) => (
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
                    <a
                      className={`lg:text-lg hover:text-secondary ${
                        isButton
                          ? 'bg-primary px-4 lg:px-6 py-2 lg:py-4 rounded-full'
                          : ''
                      }`}
                    >
                      {label}
                    </a>
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

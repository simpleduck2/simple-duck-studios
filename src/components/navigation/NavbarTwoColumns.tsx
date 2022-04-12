import { ReactNode } from 'react';

import Link from 'next/link';

import { DropdownMenu } from '@components/dropdown';
import { menus } from '@data/index';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a className="h-12 lg:h-16 aspect-[254/64] asp block">{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar hidden lg:flex items-center text-xl gap-5 lg:gap-8">
        {props.children}
      </ul>

      <DropdownMenu
        title={'Menu'}
        items={menus}
        onChange={(v: any) => console.log(v)}
        className="block lg:hidden"
      />
    </nav>

    {/* <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style> */}
  </div>
);

export { NavbarTwoColumns };

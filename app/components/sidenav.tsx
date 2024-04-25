import { Link } from 'next-view-transitions';
import NavLinks from './nav-links';
import Logo from './logo';
import { redHatDisplay } from '../lib/fonts';

export default function SideNav() {
  return (
    <div className={`${redHatDisplay.className} antialiased flex h-full bg-gray-900 flex-col px-3 py-4 md:px-2`}>
      <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-teal-800 p-4 md:h-40" href="/">
        <div className="w-40 text-white md:w-56">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-900 md:block"></div>
      </div>
    </div>
  );
}

'use client'

import { HomeIcon, TvIcon, FilmIcon } from '@heroicons/react/24/solid';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Inicio', href: '/', icon: HomeIcon },
  { name: 'Películas', href: '/movies', icon: FilmIcon },
  { name: 'Series', href: '/series', icon: TvIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-base font-medium md:flex-none md:justify-start md:p-2 md:px-3 
              ${isActive ? "bg-slate-700 text-teal-400" : "bg-gray-900 hover:bg-slate-700 hover:text-teal-400"}`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

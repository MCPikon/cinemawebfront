'use client'

import { HomeIcon, TvIcon, FilmIcon } from '@heroicons/react/24/solid';
import { Link } from 'next-view-transitions';
import { useSelectedLayoutSegment } from 'next/navigation';

const links = [
  { name: 'Inicio', segment: null, href: '/', icon: HomeIcon },
  { name: 'Películas', segment: 'movies', href: '/movies', icon: FilmIcon },
  { name: 'Series', segment: 'series', href: '/series', icon: TvIcon },
];

export default function NavLinks() {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = segment === link.segment;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`group flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-base font-bold md:flex-none md:justify-start md:p-2 md:px-3 
              ${isActive ? "bg-slate-700 text-teal-400" : "bg-gray-900 hover:bg-slate-700 hover:text-teal-400 transition hover:animate-pulse"}`}
          >
            <LinkIcon className="w-6 group-hover:animate-tada" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

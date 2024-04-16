import { VideoCameraIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <VideoCameraIcon className="size-10" />
      <p className="text-2xl font-semibold md:text-3xl ms-2">CinemaBox</p>
    </div>
  );
}

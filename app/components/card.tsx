import Image from "next/image";
import { Movie, Series } from "../lib/definitions";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "next-view-transitions";

export default function Card(
    { item } : { item: Movie | Series }
) {
    let isMovie = false;
    if ("duration" in item) isMovie = true;
    
    return (
        <div className="transition-all ease-in-out md:hover:scale-105 w-64 h-full border border-slate-800 bg-slate-800 rounded-lg md:hover:shadow-lg md:hover:shadow-slate-700">
            <Link href={isMovie ? `/movies/${item.imdbId}` : `/series/${item.imdbId}`}>
                <Image className="rounded-t-lg h-auto w-64" src={item.poster} alt={item.title} width={616} height={924} />
            </Link>
            <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.title}</h5>
                <h6 className="mb-2 text-2xl font-bold tracking-tight text-teal-500">{new Date(item.releaseDate).toLocaleDateString('es-ES', { year:"numeric", month:"long", day:"numeric"})}</h6>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {"duration" in item ? item.duration :
                     item.numberOfSeasons == 1 ? `${item?.numberOfSeasons} Temporada` :
                     `${item.numberOfSeasons} Temporadas`}
                </p>
                <Link href={isMovie ? `/movies/${item.imdbId}` : `/series/${item.imdbId}`} className="transition-colors ease-in-out inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-teal-600 hover:bg-teal-700 focus:ring-teal-800">
                    Más Info.
                    <InformationCircleIcon className="ms-1 h-5"/>
                </Link>
            </div>
        </div>
    );
}
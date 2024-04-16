import Image from "next/image";
import { Movie, Series } from "../lib/definitions";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function Card(
    { item } : { item: Movie | Series }
) {
    return (
        <div className="transition-transform ease-in-out md:hover:scale-105 w-64 h-full border border-slate-800 bg-slate-800 rounded-lg md:hover:shadow-lg md:hover:shadow-slate-700">
            <a href="#">
                <Image className="rounded-t-lg h-auto w-64" src={item.poster} alt={item.title} width={616} height={924} />
            </a>
            <div className="p-4">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.title}</h5>
                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-teal-500">{new Date(item.releaseDate).toLocaleDateString('es-ES', { year:"numeric", month:"long", day:"numeric"})}</h6>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {"duration" in item ? item.duration : `Nº de Temporadas: ${item.numberOfSeasons}`}
                </p>
                <a href="#" className="transition-colors ease-in-out inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-teal-600 hover:bg-teal-700 focus:ring-teal-800">
                    Más Info.
                    <InformationCircleIcon className="ms-1 h-5"/>
                </a>
            </div>
        </div>
    );
}
import { ArrowLeftIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { VideoPlayer } from "./video-player";
import { Episode, Season, SeriesDetails } from "../lib/definitions";

export default function SeriesInfo(
    { series } : { series : SeriesDetails }
) {
    return (
        <div style={{ backgroundImage: `url(${series.backdrop})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed"}}>
            <div className="backdrop-blur-sm bg-black/60 p-6 lg:px-9">
                <Link href="/series" className="transition-colors ease-in-out inline-flex flex-wrap items-center text-teal-400 gap-2 mb-5 text-base hover:text-teal-200">
                    <ArrowLeftIcon className="size-5"/>
                    Volver a Series
                </Link>
                <div className="lg:flex lg:gap-6">
                    <Image className="rounded-lg h-auto w-60 mx-auto mb-3 lg:mb-0 lg:w-60 xl:w-80 lg:self-start lg:mx-0" src={series.poster} alt={series.title} width={616} height={924} />
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold">{series.title}</h1>
                        <h2 className="text-xl mb-3 lg:mb-0 lg:text-2xl font-semibold">{series.creator}</h2>
                        <p>
                            <span>{new Date().toLocaleDateString('es-ES')} - 
                                    {series.numberOfSeasons > 1 ? ` ${series.numberOfSeasons} Temporadas` 
                                    : ` ${series.numberOfSeasons} Temporada`} - 
                            </span>
                            <span>
                                {series.genres.map((genre: string) => {
                                    if ((series.genres.indexOf(genre) == 0 
                                    || series.genres.indexOf(genre) != series.genres.length - 1)
                                    && series.genres.length > 1) return ` ${genre} ·`
                                    return ` ${genre}`
                                })}
                            </span>
                        </p>
                        <h3 className="text-xl font-semibold mt-6">Sinopsis</h3>
                        <p className="xl:w-1/2 mt-1 text-base text-pretty font-light">{series.overview}</p>
                        <h3 className="text-xl font-semibold mt-6">Temporadas</h3>
                        <div className="max-w-4xl backdrop-blur-3xl bg-slate-900/20 rounded-xl p-4 mt-2">
                            <div className="divide-y divide-slate-500">
                                {series.seasonList.map((season: Season) => (
                                    <details key={series.seasonList.indexOf(season)} className="group" open={series.seasonList.indexOf(season) == 0 ? true : false}>
                                        <summary
                                            className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                                            <div className="flex items-center text-xl">    
                                                <Image className="rounded-lg h-auto w-11 me-5 mb-3 lg:w-14 xl:w-16" src={season.poster} alt={`${series.title} - Temporada ${series.seasonList.indexOf(season) + 1}`} width={616} height={924}/>
                                                Temporada {series.seasonList.indexOf(season) + 1}
                                            </div>
                                            <div>
                                                <PlusIcon className="block fill-slate-300 h-5 w-5 group-open:hidden"/>
                                                <MinusIcon className="hidden fill-slate-300 h-5 w-5 group-open:block"/>
                                            </div>
                                        </summary>
                                        <div className="pb-4 text-secondary-500">
                                            <table className="table-auto border-separate border-spacing-x-2">
                                                <thead>
                                                    <tr className="text-teal-300">
                                                        <th>#</th>
                                                        <th>Título</th>
                                                        <th>Fecha de Estreno</th>
                                                        <th>Duración</th>
                                                        <th>Sinopsis</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {season.episodeList.map((episode: Episode) => (
                                                        <tr key={season.episodeList.indexOf(episode)}>
                                                            <td className="text-center font-bold text-teal-700">{season.episodeList.indexOf(episode) + 1}</td>
                                                            <td className="text-center">{episode.title}</td>
                                                            <td className="text-center">{episode.releaseDate}</td>
                                                            <td className="text-center">{episode.duration}</td>
                                                            <td className="text-pretty md:w-1/2">{episode.description}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-6">Trailer</h3>
                        <VideoPlayer videoUrl={series.trailerLink}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
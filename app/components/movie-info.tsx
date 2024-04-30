import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { VideoPlayer } from "./video-player";
import { MovieDetails } from "../lib/definitions";

export default function MovieInfo(
    { movie } : { movie : MovieDetails }
) {
    return (
        <div style={{ backgroundImage: `url(${movie.backdrop})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed"}}>
            <div className="backdrop-blur-sm bg-black/60 p-6 lg:px-9">
                <Link href="/movies" className="transition-colors ease-in-out inline-flex flex-wrap items-center text-teal-400 gap-2 mb-5 text-base hover:text-teal-200">
                    <ArrowLeftIcon className="size-5"/>
                    Volver a Películas
                </Link>
                <div className="lg:flex lg:gap-6">
                    <Image className="rounded-lg h-auto w-60 mx-auto mb-3 lg:mb-0 lg:w-60 xl:w-80 lg:self-start lg:mx-0" src={movie.poster} alt={movie.title} width={616} height={924} />
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold">{movie.title}</h1>
                        <h2 className="text-xl mb-3 lg:mb-0 lg:text-2xl font-semibold">{movie.director}</h2>
                        <p>
                            <span>{new Date().toLocaleDateString('es-ES')} - {movie.duration} - </span>
                            <span>
                                {movie.genres.map((genre: string) => {
                                    if ((movie.genres.indexOf(genre) == 0 
                                    || movie.genres.indexOf(genre) != movie.genres.length - 1)
                                    && movie.genres.length > 1) return ` ${genre} ·`
                                    return ` ${genre}`
                                })}
                            </span>
                        </p>
                        <h3 className="text-xl font-semibold mt-6">Sinopsis</h3>
                        <p className="xl:w-1/2 mt-1 text-base text-pretty font-light">{movie.overview}</p>
                        <h3 className="text-xl font-semibold mt-6">Trailer</h3>
                        <VideoPlayer videoUrl={movie.trailerLink}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { fetchMovieByImdbId } from "@/app/lib/data";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "next-view-transitions";

export default async function MovieDetailsPage(
    { params }: { params: { imdbId: string } }
) {
    const imdbId = params.imdbId;
    const movie = await fetchMovieByImdbId(imdbId);

    return (
        <section className="p-6 md:p-12">
            <Link href="/movies" className="transition-colors ease-in-out flex flex-wrap items-center text-teal-400 gap-2 mb-3 text-base hover:text-teal-200">
                <ArrowLeftIcon className="size-5"/>
                Volver a Películas
            </Link>
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <h2 className="text-2xl font-semibold">{movie.director}</h2>
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
            <p className="w-1/2 mt-1 text-base font-light">{movie.overview}</p>
        </section>
    );
}
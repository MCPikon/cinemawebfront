import MovieInfo from "@/app/components/movie-info";
import { fetchMovieByImdbId } from "@/app/lib/data";

export default async function MovieDetailsPage(
    { params }: { params: { imdbId: string } }
) {
    const movie = await fetchMovieByImdbId(params.imdbId);
    return (
        <section>
            <MovieInfo movie={movie}/>
        </section>
    );
}
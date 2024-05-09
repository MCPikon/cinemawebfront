import MovieInfo from "@/app/components/movies/movie-info";
import ReviewList from "@/app/components/review-list";
import { ReviewCardsSkeleton } from "@/app/components/skeletons";
import { fetchMovieByImdbId } from "@/app/lib/data";
import { Suspense } from "react";

export default async function MovieDetailsPage(
    { params }: { params: { imdbId: string } }
) {
    const movie = await fetchMovieByImdbId(params.imdbId);
    return (
        <section>
            <MovieInfo movie={movie}/>
            <Suspense fallback={<ReviewCardsSkeleton/>}>
                <ReviewList imdbId={params.imdbId} isMovie/>
            </Suspense>
        </section>
    );
}
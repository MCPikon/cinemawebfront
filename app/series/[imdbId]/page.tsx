import ReviewList from "@/app/components/review-list";
import SeriesInfo from "@/app/components/series/series-info";
import { fetchSeriesByImdbId } from "@/app/lib/data";

export default async function SeriesDetailsPage(
    { params }: { params: { imdbId: string } }
) {
    const series = await fetchSeriesByImdbId(params.imdbId);
    return (
        <section>
            <SeriesInfo series={series}/>
            <ReviewList imdbId={params.imdbId} isMovie={false}/>
        </section>
    );
}
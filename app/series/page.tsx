import { Suspense } from "react";
import { CardsSkeleton } from "../components/skeletons";
import SeriesList from "../components/series-list";
import SearchBar from "../components/search-bar";

export default async function SeriesPage(
    { searchParams }: { searchParams?: { query?: string } }
) {
    const query = searchParams?.query || '';

    return (
        <section className="p-6 md:p-12">
            <h1 className="text-4xl font-bold tracking-tight">Series</h1>
            <h2 className="text-lg font-light text-slate-300 mt-2">Descubre las series de TV / Streaming que están triunfando ahora.</h2>
            <div className="mt-2 mb-10 flex items-center justify-between gap-2 md:mt-5">
                <SearchBar placeholder="Buscar serie..." />
            </div>
            <Suspense fallback={<CardsSkeleton/>}>
                <SeriesList query={query}/>
            </Suspense>
        </section>
    );
}
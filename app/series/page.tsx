import { Suspense } from "react";
import { CardsSkeleton } from "../components/skeletons";
import SeriesList from "../components/series-list";

export default async function SeriesPage() {
    return (
        <section className="p-6 md:p-12">
            <h1 className="text-4xl font-bold tracking-tight">Series</h1>
            <h2 className="text-lg font-light text-slate-300 mt-2">Descubre las series de TV / Streaming que están triunfando ahora.</h2>
            <div className="flex flex-col justify-center items-center mt-6 lg:grid gap-6 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
                <Suspense fallback={<CardsSkeleton/>}>
                    <SeriesList />
                </Suspense>
            </div>
        </section>
    );
}
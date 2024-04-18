import { Suspense } from "react";
import MoviesList from "../components/movies-list";
import { CardsSkeleton } from "../components/skeletons";

export default async function MoviesPage() {
    return (
        <section className="p-6 md:p-12">
            <h1 className="text-4xl font-bold tracking-tight">Películas</h1>
            <h2 className="text-lg font-light text-slate-300 mt-2">Descubre las películas que están triunfando ahora.</h2>
            <Suspense fallback={<CardsSkeleton/>}>
                <MoviesList />
            </Suspense>
        </section>
    );
}
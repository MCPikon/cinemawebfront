import { Suspense } from "react";
import MoviesList from "../components/movies-list";
import { CardsSkeleton } from "../components/skeletons";
import SearchBar from "../components/search-bar";

export default async function MoviesPage(
    { searchParams }: { searchParams?: { query?: string } }
) {
    const query = searchParams?.query || '';
    
    return (
        <section className="p-6 md:p-12">
            <h1 className="text-4xl font-bold tracking-tight">Películas</h1>
            <h2 className="text-lg font-light text-slate-300">Descubre las películas que están triunfando ahora.</h2>
            <div className="mt-2 mb-10 flex items-center justify-between gap-2 md:mt-5">
                <SearchBar placeholder="Buscar película..." />
            </div>
            <Suspense fallback={<CardsSkeleton/>}>
                <MoviesList query={query}/>
            </Suspense>
        </section>
    );
}
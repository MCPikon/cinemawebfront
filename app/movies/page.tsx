import { Suspense } from "react";
import MoviesList from "../components/movies/movies-list";
import { CardsSkeleton } from "../components/skeletons";
import SearchBar from "../components/search-bar";
import { Link } from "next-view-transitions";
import { PlusIcon } from "@heroicons/react/24/solid";

export default async function MoviesPage(
    { searchParams }: { searchParams?: { query?: string } }
) {
    const query = searchParams?.query || '';
    
    return (
        <section className="px-6 pt-6 pb-6 md:px-12 md:pt-10 lg:pb-0.5">
            <h1 className="text-4xl font-bold tracking-tight">Películas</h1>
            <h2 className="text-lg font-light text-slate-300">Descubre las películas que están triunfando ahora.</h2>
            <div className="mt-2 mb-10 flex items-center justify-between gap-2 md:mt-5">
                <SearchBar placeholder="Buscar película..." />
                <Link href="/movies/new" className="transition-colors ease-in-out inline-flex items-center px-4 py-3 text-base font-bold text-center text-white rounded-md focus:ring-4 focus:outline-none bg-teal-700 hover:bg-teal-800 focus:ring-teal-900">
                    <PlusIcon className="md:me-1 h-5 stroke-white"/>
                    <span className="hidden md:block">Añadir Película</span>
                </Link>
            </div>
            <Suspense fallback={<CardsSkeleton/>}>
                <MoviesList query={query}/>
            </Suspense>
        </section>
    );
}
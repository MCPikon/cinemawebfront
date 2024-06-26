import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "next-view-transitions";

export default function NewSeriesPage() {
    return (
        <section className="px-6 pt-6 pb-6 md:px-12 md:pt-10 lg:pb-0.5">
            <Link href="/series" className="transition-colors ease-in-out inline-flex flex-wrap items-center text-teal-400 gap-2 mb-5 text-base hover:text-teal-200">
                <ArrowLeftIcon className="size-5"/>
                Volver a Series
            </Link>
            <h1 className="text-4xl font-bold tracking-tight">Añadir nueva serie</h1>
            <h2 className="text-lg font-light text-slate-300">¿No encuentras la serie que estás buscando? ¡Añádela tu mismo!.</h2>
        </section>
    );
}
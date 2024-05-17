'use client'

import { createMovie } from "@/app/lib/actions";
import { AtSymbolIcon, CalendarDaysIcon, ClockIcon, DocumentTextIcon, IdentificationIcon, LinkIcon, PhotoIcon, UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import toast from "react-hot-toast";
import { TagsInput } from "react-tag-input-component";

export default function CreateMovieForm() {
    const [genres, setGenres] = useState(["Crimen"]);

    const notifyClearedForm = () => {
        toast("Campos vaciados.", 
            {icon: '🧹',
             style: {
                background: "#334155",
                color: '#fff',
            }});
    }

    return (
        <form action={async (formData: FormData) => {
            const result = await createMovie(formData);
            if(result?.error) {
                toast.error("A ocurrido un error al enviar el formulario. Comprueba que los campos son correctos.", 
                {style: {
                    background: "#334155",
                    color: '#fff',
                }});
            } else {
                toast.success("Película creada con éxito", 
                {style: {
                    background: "#334155",
                    color: '#fff',
                }});
            }
        }}>
            <div className="xl:grid xl:grid-cols-2">
                {/* Title */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="title" className="mb-2 block text-sm font-medium">
                        Introduce el título
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                            <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Ej: El lobo de Wall Street"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern=".{2,}"
                            />
                        </div>
                    </div>
                </div>
                {/* ImdbId */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="imdbId" className="mb-2 block text-sm font-medium">
                        Introduce el id de IMDB <em>(Puedes buscar la película <a className="transition-colors text-teal-400 hover:text-teal-200" href="https://www.imdb.com/" target="_blank">aquí</a> y consultarlo)</em>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="imdbId"
                                name="imdbId"
                                type="text"
                                placeholder="Ej: tt0993846"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern="^tt\d+$"
                            />
                            <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
                {/* Overview */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="overview" className="mb-2 block text-sm font-medium">
                        Introduce la sinopsis
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <textarea 
                                id="overview"
                                name="overview"
                                placeholder="Ej: Película basada en hechos reales del corredor de bolsa neoyorquino Jordan Belfort..."
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required>
                            </textarea>
                            <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
                {/* Duration */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="duration" className="mb-2 block text-sm font-medium">
                        Introduce la duración
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="duration"
                                name="duration"
                                type="text"
                                placeholder="Ej: 2h 59m"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern="^(\d{1,2})h\s(\d{1,2})m$"
                            />
                            <ClockIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
                {/* Director */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="director" className="mb-2 block text-sm font-medium">
                        Introduce director/a
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="director"
                                name="director"
                                type="text"
                                placeholder="Ej: Martin Scorsese"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern="^(?=\S+\s+\S+)\S+(\s+\S+)*$"
                            />
                            <UserIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
                {/* Release Date */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="releaseDate" className="mb-2 block text-sm font-medium">
                        Introduce la fecha de estreno
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="releaseDate"
                                name="releaseDate"
                                type="text"
                                placeholder="Ej: 2002-04-12"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern="^(\d{4})-(\d{2})-(\d{2})$"
                            />
                            <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
                {/* Trailer Link */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="trailerLink" className="mb-2 block text-sm font-medium">
                        Introduce la url del trailer en <a className="transition-colors text-teal-400 hover:text-teal-200" href="https://www.imdb.com/" target="_blank">Youtube</a>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="trailerLink"
                                name="trailerLink"
                                type="text"
                                placeholder="Ej: https://youtu.be/DO_96Ee_qWw"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern="^(https?:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu\.be\/))[a-zA-Z0-9_-]+$"
                            />
                            <LinkIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
                {/* Genres */}
                <div className="mb-4 max-w-lg">
                    <label className="mb-2 block text-sm font-medium">
                        Introduce los géneros a los que pertenece
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <TagsInput
                            value={genres}
                            onChange={setGenres}
                            placeHolder="Introduce un género..."
                        />
                        <input type="hidden" id="genres" name="genres" value={JSON.stringify(genres)}/>
                    </div>
                </div>
                {/* Poster */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="poster" className="mb-2 block text-sm font-medium">
                        Introduce la url del Poster
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="poster"
                                name="poster"
                                type="text"
                                placeholder="Ej: https://image.tmdb.org/t/p/original/jTlIYjvS16XOpsfvYCTmtEHV10K.jpg"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern="^(https?://)([^/\s]+\.[^/\s]+)/(.+\.(jpg|jpeg|png|gif|bmp|webp))(\?[^/\s]+)?$"
                            />
                            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
                {/* Backdrop */}
                <div className="mb-4 max-w-lg">
                    <label htmlFor="backdrop" className="mb-2 block text-sm font-medium">
                        Introduce la url de la imagen de fondo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="backdrop"
                                name="backdrop"
                                type="text"
                                placeholder="Ej: https://image.tmdb.org/t/p/original/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg"
                                className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                required
                                pattern="^(https?://)([^/\s]+\.[^/\s]+)/(.+\.(jpg|jpeg|png|gif|bmp|webp))(\?[^/\s]+)?$"
                            />
                            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 inline-flex gap-4">
                <button className="transition-colors ease-in-out inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-red-900" type="reset" onClick={notifyClearedForm}>Borrar campos</button>
                <button className="transition-colors ease-in-out inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-teal-700 hover:bg-teal-800 focus:ring-teal-900" type="submit">Crear película</button>
            </div>
        </form>
    )
}
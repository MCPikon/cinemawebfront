'use client'

import { createMovie } from "@/app/lib/actions";
import { AtSymbolIcon, CalendarDaysIcon, ClockIcon, DocumentTextIcon, IdentificationIcon, LinkIcon, PhotoIcon, TrashIcon, UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import toast from "react-hot-toast";
import { TagsInput } from "react-tag-input-component";

export default function CreateMovieForm() {
    const [genres, setGenres] = useState(["Crimen"]);

    const notifyClearedForm = () => {
        toast("Campos vaciados.", 
            {icon: <TrashIcon className="size-6"/>,
             style: {
                background: "#334155",
                color: '#fff',
                }
            }
        );
    }

    const notifyActionForm = async (formData: FormData) => {
        const promise = createMovie(formData);

        toast.promise(
            promise,
            {
                loading: 'Cargando...',
                success: <b>Película {`'${formData.get("title")}'`} añadida con éxito</b>,
                error: <span><b>Ha ocurrido un error al enviar el formulario.</b> (Compruebe que los campos son correctos)</span>
            },
            {style: {
                background: "#334155",
                color: '#fff',
            },
            success: {
                style: {
                    background: "#0d3a0d",
                    color: '#fff',
                },
                duration: 5000,
            },
            error: {
                style: {
                    background: "#5c0a0a",
                    color: '#fff',
                },
                duration: 4000
            }}
        );
    };

    const inputs = [
        {id: "title", label: "Introduce el título", icon: <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: El lobo de Wall Street", title: "Por favor, introduzca un título de al menos 1 palabra de 2 letras", pattern: ".{2,}"},
        {id: "imdbId", label: "Introduce el id de IMDB <em>(Puedes buscar la película <a class=\"transition-colors text-teal-400 hover:text-teal-200\" href=\"https://www.imdb.com/\" target=\"_blank\">aquí</a> y consultarlo)</em>", icon: <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: tt0993846", title: "Por favor, introduzca un ID de imdb con este formato: tt00000", pattern: ".{2,}"},
        {id: "overview", label: "Introduce la sinopsis", icon: <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: Película basada en hechos reales del corredor de bolsa neoyorquino Jordan Belfort...", title: "Por favor, introduzca la sinopsis de la película"},
        {id: "duration", label: "Introduce la duración", icon: <ClockIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: 2h 59m", title: "Por favor, introduzca la duración en horas y minutos de la película (XXh XXm)", pattern: "^(\\d{1,2})h\\s(\\d{1,2})m$"},
        {id: "director", label: "Introduce director/a", icon: <UserIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: Martin Scorsese", title: "Por favor, introduzca el nombre del director de la película", pattern: "^(?=\\S+\\s+\\S+)\\S+(\\s+\\S+)*$"},
        {id: "releaseDate", label: "Introduce la fecha de estreno", icon: <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: 2002-04-12", title: "Por favor, introduzca la fecha de estreno de la película con el siguiente formato (YYYY-MM-DD)", pattern: "^(\\d{4})-(\\d{2})-(\\d{2})$"},
        {id: "trailerLink", label: "Introduce la url del trailer en <a class=\"transition-colors text-teal-400 hover:text-teal-200\" href=\"https://www.imdb.com/\" target=\"_blank\">Youtube</a>", icon: <LinkIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: https://youtu.be/DO_96Ee_qWw", title: "Por favor, introduzca una URL válida de Youtube", pattern: "^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube(-nocookie)?\\.com|youtu.be))(\\/(?:[\\w\\-]+\\?v=|embed\\/|live\\/|v\\/)?)([\\w\\-]+)(\\S+)?$"},
        {id: "genres", label: "Introduce los géneros a los que pertenece", placeholder: "Introduce un género..."},
        {id: "poster", label: "Introduce la url del poster", icon: <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: https://image.tmdb.org/t/p/original/jTlIYjvS16XOpsfvYCTmtEHV10K.jpg", title: "Por favor, introduzca una URL de imagen válida (png, jpg, jpeg o webp)", pattern: "(https?:\\/\\/\\S+(?:png|jpe?g|webp)\\S*)"},
        {id: "backdrop", label: "Introduce la url de la imagen de fondo", icon: <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />, placeholder: "Ej: https://image.tmdb.org/t/p/original/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg", title: "Por favor, introduzca una URL de imagen válida (png, jpg, jpeg o webp)", pattern: "(https?:\\/\\/\\S+(?:png|jpe?g|webp)\\S*)"}
    ];

    return (
        <form action={notifyActionForm}>
            <div className="xl:grid xl:grid-cols-2">
                {inputs.map((item) => (
                    <div key={item.id} className="mb-4 max-w-lg">
                        {item.id === "genres" ? <div 
                            className="mb-2 block text-sm font-medium">
                            <div dangerouslySetInnerHTML={{__html: item.label}}/>
                        </div> : <label 
                            htmlFor={item.id} className="mb-2 block text-sm font-medium">
                            <div dangerouslySetInnerHTML={{__html: item.label}}/>
                        </label>}
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                {item.icon}
                                {item.id === "overview" ? <textarea 
                                    id={item.id}
                                    name={item.id}
                                    placeholder={item.placeholder}
                                    className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    title={item.title}
                                    required>
                                </textarea> : item.id === "genres" ? <>
                                    <TagsInput
                                        name="genresList"
                                        value={genres}
                                        onChange={setGenres}
                                        placeHolder={item.placeholder}
                                    />
                                    <input type="hidden" id={item.id} name={item.id} value={JSON.stringify(genres)}/>
                                </> : <input
                                    id={item.id}
                                    name={item.id}
                                    type="text"
                                    placeholder={item.placeholder}
                                    className="peer block w-full rounded-md bg-slate-700 border-2 border-slate-500 py-2 pl-10 text-sm outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    title={item.title}
                                    required
                                    pattern={item.pattern}
                                />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Buttons */}
            <div className="mt-4 flex justify-center md:inline-flex gap-4">
                <button className="transition-colors ease-in-out inline-flex items-center px-4 md:px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-red-900" type="reset" onClick={notifyClearedForm}>Borrar campos</button>
                <button className="transition-colors ease-in-out inline-flex items-center px-8 md:px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-teal-700 hover:bg-teal-800 focus:ring-teal-900" type="submit">Crear película</button>
            </div>
        </form>
    )
}
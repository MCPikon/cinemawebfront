'use server'

import { z } from 'zod';
import { postNewMovie } from './data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const MovieSchema = z.object({
    imdbId: z.string().min(1, "El imdbId no puede estar vacío"),
    title: z.string().min(1, "El título no puede estar vacío"),
    overview: z.string().min(1, "La sinopsis no puede estar vacío"),
    duration: z.string().min(1, "La duración no puede estar vacío"),
    director: z.string().min(1, "El director no puede estar vacío"),
    releaseDate: z.string().min(1, "La fecha de salida no puede estar vacío"),
    trailerLink: z.string().min(1, "La url del trailer no puede estar vacía"),
    genres: z.array(z.string()).nonempty("La película tiene que tener al menos un género"),
    poster: z.string().min(1, "La url del poster no puede vacía"),
    backdrop: z.string().min(1, "La url de la imagen de fondo no puede vacía")
});

export type MoviePostSchema = z.infer<typeof MovieSchema>

export async function createMovie(formData: FormData) {

    try {
        const movieToAdd: MoviePostSchema = MovieSchema.parse({
            imdbId: formData.get("imdbId"),
            title: formData.get("title"),
            overview: formData.get("overview"),
            duration: formData.get("duration"),
            director: formData.get("director"),
            releaseDate: formData.get("releaseDate"),
            trailerLink: formData.get("trailerLink"),
            genres: JSON.parse((formData.get("genres") as string)),
            poster: formData.get("poster"),
            backdrop: formData.get("backdrop")
        });

        await postNewMovie(movieToAdd);

        revalidatePath('/movies');
        redirect('/movies');

    } catch(err) {
        return {error: "A ocurrido un error"}
    }
}
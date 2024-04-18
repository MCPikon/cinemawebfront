import { Movie, MovieDetails, Series, SeriesDetails } from "./definitions";
import { API_URL } from "./utils";

export async function fetchAllMovies() {
    try {
        const moviesList: Movie[] = await fetch(`${API_URL}movies/findAll`, {
            next: {
                revalidate: 60
            }
        }).then(res => res.json())
        return moviesList;
    } catch(error) {
        console.log("Error fetching all movies:", error);
        throw new Error("Error al obtener la lista de películas.")
    }
}

export async function fetchMovieByImdbId(imdbId: string) {
    try {
        const movie: MovieDetails = await fetch(`${API_URL}movies/findByImdbId/${imdbId}`, {
            next: {
                revalidate: 60
            }
        }).then(res => {
            if (res.status == 404) throw new Error()
            return res.json()
        })
        return movie;
    } catch(error) {
        console.log(`Error fetching movie with imdbId ${imdbId}:`, error);
        throw new Error(`Error al obtener la película con imdbId: ${imdbId}.`)
    }
}

export async function fetchAllSeries() {
    try {
        const seriesList: Series[] = await fetch(`${API_URL}series/findAll`, {
            next: {
                revalidate: 60
            }
        }).then(res => res.json())
        return seriesList;
    } catch(error) {
        console.log("Error fetching all series:", error);
        throw new Error("Error al obtener la lista de series.")
    }
}

export async function fetchSeriesByImdbId(imdbId: string) {
    try {
        const series: SeriesDetails = await fetch(`${API_URL}series/findByImdbId/${imdbId}`, {
            next: {
                revalidate: 60
            }
        }).then(res => res.json())
        return series;
    } catch(error) {
        console.log(`Error fetching series with imdbId ${imdbId}:`, error);
        throw new Error(`Error al obtener la serie con imdbId: ${imdbId}.`)
    }
}
import { MoviePostSchema } from "./actions";
import { Movie, MovieDetails, Review, Series, SeriesDetails } from "./definitions";
import { API_URL } from "./utils";

export async function checkAPIHealth() {
    try {
        return await fetch(`${API_URL}health`)
        .then(res => {
            if (res.status == 207) return true;
            else return false;
        })
    } catch(error) {
        console.log(`Error connecting to API (Status DOWN)`, error);
        return false;
    }
}

export async function fetchAllMovies(title?: string, page?: number) {
    try {
        const isTitleValid = (title !== undefined && title !== '')
        let endpoint = `${API_URL}movies/findAll`;
        if (isTitleValid) endpoint = endpoint.concat(`?title=${title}`);

        if (page !== undefined)
            endpoint = isTitleValid ? endpoint.concat(`&page=${page - 1}`) : endpoint.concat(`?page=${page - 1}`);
        
        const moviesList = await fetch(endpoint, {
                next: {
                    revalidate: 60
                }
            }).then(res => {
                if(res.status == 204) return null
                else return res.json()
            })
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

export async function postNewMovie(movieToPost: MoviePostSchema) {
    try {
        const movie: Movie = await fetch(`${API_URL}movies/save`, {
            method: "POST",
            body: JSON.stringify(movieToPost),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
        return movie;
    } catch(error) {
        console.log(`Error posting movie with title ${movieToPost.title}:`, error);
        throw new Error(`Error al añadir la película con título: ${movieToPost.title}.`)
    }
}

export async function fetchAllSeries(title?: string, page?: number) {
    try {
        const isTitleValid = (title !== undefined && title !== '')
        let endpoint = `${API_URL}series/findAll`;
        if (isTitleValid) endpoint = endpoint.concat(`?title=${title}`);

        if (page !== undefined)
            endpoint = isTitleValid ? endpoint.concat(`&page=${page - 1}`) : endpoint.concat(`?page=${page - 1}`);

        const seriesList = await fetch(endpoint, {
            next: {
                revalidate: 60
            }
        }).then(res => {
            if (res.status == 204) return null
            else return res.json()
        });
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

export async function fetchReviewsByImdbId(imdbId: string) {
    try {
        let res = await fetch(`${API_URL}reviews/findAllByImdbId/${imdbId}`, {
            next: {
                revalidate: 60
            }
        })
        if(res.status === 204) return [];
        const reviewList: Review[] = await res.json();
        return reviewList;
    } catch(error) {
        if(error)
        console.log(`Error fetching all reviews with imdbId ${imdbId}:`, error);
        throw new Error(`Error al obtener la lista de reviews con imdbId: ${imdbId}.`)
    }
}
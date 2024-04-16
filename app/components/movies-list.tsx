import Card from "./card"
import { Movie } from "../lib/definitions"

const fetchMovies = async () => {
    return await fetch('http://localhost:8080/api/v1/movies/findAll', {
        next: {
            revalidate: 60
        }
    }).then(res => res.json())
}

export default async function MoviesList() {
    const movies = await fetchMovies()

    return movies.map((movie: Movie) => (
        <Card key={movie.imdbId} item={movie} />
    ));
}
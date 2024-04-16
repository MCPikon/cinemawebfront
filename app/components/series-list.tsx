import Card from "./card"
import { Series } from "../lib/definitions"

const fetchSeries = async () => {
    return await fetch('http://localhost:8080/api/v1/series/findAll', {
        next: {
            revalidate: 60
        }
    }).then(res => res.json())
}

export default async function SeriesList() {
    const movies = await fetchSeries()

    return movies.map((series: Series) => (
        <Card key={series.imdbId} item={series} />
    ));
}
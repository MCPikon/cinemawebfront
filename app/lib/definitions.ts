export type Movie = {
    imdbId: string, 
    title: string, 
    duration: string, 
    releaseDate: string, 
    poster: string
}

export type MovieDetails = {
    id: string,
    imdbId: string, 
    title: string, 
    overview: string,
    duration: string,
    director: string,
    releaseDate: string, 
    trailerLink: string, 
    genres: string[],
    poster: string,
    backdrop: string
}

export type Series = {
    imdbId: string, 
    title: string, 
    numberOfSeasons: number, 
    releaseDate: string, 
    poster: string
}

export type Season = {
    overview: string,
    episodeList: Episode[],
    poster: string
}

export type Episode = {
    title: string,
    releaseDate: string,
    duration: string,
    description: string
}

export type SeriesDetails = {
    id: string,
    imdbId: string, 
    title: string,
    overview: string, 
    numberOfSeasons: number, 
    creator: string,
    releaseDate: string, 
    trailerLink: string,
    genres: string[],
    seasonList: Season[],
    poster: string,
    backdrop: string
}

export type Review = {
    id: string,
    title: string,
    body: string,
    createdAt: Date,
    updatedAt: Date
}
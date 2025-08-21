import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieType, MovieApiResponseType } from "types";

function DetailRoute() {
	const { id } = useParams();
	const [movie, setMovie] = useState<MovieType | undefined>(undefined);
	useEffect(() => {
		const MOVIE_API_URI = `https://yts.mx/api/v2/movie_details.json?`;
		const getMovie = async () => {
			const response: MovieApiResponseType = await (
				await fetch(MOVIE_API_URI + `movie_id=${id}`)
			).json();
			response.data.movie.torrents = [];
			setMovie(response.data.movie);
		};
		getMovie();
	}, [id]);
	return movie === undefined ? <h1>Loading...</h1> : <h1>{movie.id}</h1>;
}

export default DetailRoute;

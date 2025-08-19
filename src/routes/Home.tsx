import { useState, useEffect } from "react";
import { MovieComponent } from "components";
import { MovieInterface, ApiResponseInterface } from "types";

function HomeRoute() {
	const MOVIES_API_URI =
		"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
	const [isLoading, setLoading] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [movies, setMovies] = useState<MovieInterface[]>([]);
	const getMovies = async () => {
		const response: ApiResponseInterface = await (
			await fetch(MOVIES_API_URI + `&page=${pageNumber}`)
		).json();
		setTotalCount(response.data.movie_count);
		response.data.movies.map((movie) => {
			movie.torrents = [];
			return movie;
		});
		console.log(response.data.movies);
		setMovies(response.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	});
	return (
		<div>
			{isLoading ? (
				<h1>loading...</h1>
			) : (
				<div>
					{movies.map((movie: MovieInterface) => (
						<MovieComponent
							key={movie.id}
							title={movie.title}
							coverImg={movie.medium_cover_image}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default HomeRoute;

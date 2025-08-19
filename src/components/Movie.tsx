import { Link } from "react-router-dom";

type PropTypes = { coverImg: string; title: string; genres: string[] };

export function MovieComponent({ coverImg, title, genres }: PropTypes) {
	return (
		<Link to="/movie">
			<div>
				<img
					alt={title}
					src={coverImg}
				/>
				<h2>{title}</h2>
				<ul>
					{genres.map((genre) => (
						<li key={genre}>{genre}</li>
					))}
				</ul>
			</div>
		</Link>
	);
}

import { Link } from "react-router-dom";
import styles from "css/Movie.module.css";

type PropTypes = {
	id: number;
	coverImg: string;
	title: string;
	genres: string[];
};

export function MovieComponent({ id, coverImg, title, genres }: PropTypes) {
	return (
		<Link to={`/movie/${id}`}>
			<div className={styles.movieCard}>
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

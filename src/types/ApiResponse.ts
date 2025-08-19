import { MovieInterface } from "./Movie";

export interface ApiResponseInterface {
	status: string;
	status_message: string;
	data: {
		movie_count: number;
		limit: number;
		page_number: number;
		movies: MovieInterface[];
	};
	"@meta": {
		server_time: number;
		server_timezone: string;
		api_version: number;
		execution_time: string;
	};
}

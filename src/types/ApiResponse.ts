export type ApiResponseType = {
	status: string;
	status_message: string;
	"@meta": {
		server_time: number;
		server_timezone: string;
		api_version: number;
		execution_time: string;
	};
};

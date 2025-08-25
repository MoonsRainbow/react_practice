import { useState, useEffect } from "react";

export const useNetwork = (onChange: (status: boolean) => void) => {
	const [status, setStatus] = useState(navigator.onLine);
	const handleChange = () => {
		setStatus(navigator.onLine);
		onChange(navigator.onLine);
	};
	useEffect(() => {
		window.addEventListener("online", handleChange);
		window.addEventListener("offline", handleChange);
		return () => {
			window.removeEventListener("online", handleChange);
			window.removeEventListener("offline", handleChange);
		};
	}, []);
	return status;
};

import { useState, useRef } from "react";

export const useFullScreen = () => {
	const [isFull, setIsFull] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);
	const triggerFullEvent = () => {
		const e = imgRef.current;
		if (!e) return;
		e.requestFullscreen();
		setIsFull(true);
	};
	const exitFullEvent = () => {
		document.exitFullscreen();
		setIsFull(false);
	};
	return { isFull, imgRef, triggerFullEvent, exitFullEvent };
};

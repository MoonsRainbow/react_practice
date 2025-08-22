import { useRef, useEffect } from "react";

export const useFadeIn = <T extends HTMLElement>(
	durations: number = 1,
	delay: number = 0
) => {
	const element = useRef<T>(null);
	useEffect(() => {
		const el = element.current;
		if (!el) return;
		el.style.transition = `opacity ${durations}s ease-in-out ${delay}s`;
		el.style.opacity = "1";
	}, []);
	return { ref: element, style: { opacity: 0 } };
};

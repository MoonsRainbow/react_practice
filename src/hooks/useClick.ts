import { useEffect, useRef } from "react";

export const useClick = <T extends HTMLElement>(
	onClick: (e: MouseEvent) => void
) => {
	const element = useRef<T>(null);
	useEffect(() => {
		const el = element.current;
		if (!el) return;
		el.addEventListener("click", onClick);
		return () => {
			if (!el) return;
			el.removeEventListener("click", onClick);
		};
	}, []);
	return element;
};

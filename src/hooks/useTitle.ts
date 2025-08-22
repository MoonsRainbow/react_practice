import { useState, useEffect } from "react";

export const useTitle = (initialTitle: string) => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector<HTMLTitleElement>("title");
		if (htmlTitle) {
			htmlTitle.innerText = title;
		}
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

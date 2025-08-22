import { useState, ChangeEvent } from "react";

export const useInput = (
	initialValue: string,
	validator?: (s: string) => boolean
) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const {
			target: { value },
		} = e;
		let willUpdate = true;
		if (typeof validator === "function") {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};

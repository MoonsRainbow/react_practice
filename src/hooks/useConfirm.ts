export const useConfirm = (
	message: string = "",
	accepted: () => void,
	aboted: () => void
) => {
	const confirmAction = () => {
		if (window.confirm(message)) {
			accepted();
		} else {
			aboted();
		}
	};
	return confirmAction;
};

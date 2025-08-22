import { useState } from "react";

export type Tab = {
	tab: string;
	content: string;
};

export const useTabs = (initialTabNo: number, allTabs: Tab[] = []) => {
	const [currentTabNo, setCurrentTabNo] = useState(initialTabNo);
	return {
		currentItem: allTabs.length > 0 ? allTabs[currentTabNo] : undefined,
		changeItem: setCurrentTabNo,
	};
};

import { Tab, useTabs } from "hooks/useTabs";

const tabsCategory: Tab[] = [
	{
		tab: "Section 1",
		content: "Setion 1 Content.",
	},
	{
		tab: "Section 2",
		content: "Setion 2 Content.",
	},
	{
		tab: "Section 3",
		content: "Setion 3 Content.",
	},
	{
		tab: "Section 4",
		content: "Setion 4 Content.",
	},
];

function SandboxRouter() {
	const { currentItem, changeItem } = useTabs(0, tabsCategory);
	return (
		<div>
			<h1>hello</h1>
			{currentItem && (
				<div>
					{tabsCategory.map((tab, index) => (
						<button onClick={() => changeItem(index)}>{tab.tab}</button>
					))}
					<h3>{currentItem.tab}</h3>
					<p>{currentItem.content}</p>
				</div>
			)}
		</div>
	);
}

export default SandboxRouter;

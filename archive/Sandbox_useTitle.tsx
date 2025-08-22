import { useTitle } from "hooks/useTitle";

function SandboxRouter() {
	const titleUpdater = useTitle("Loading...");
	setTimeout(() => titleUpdater("Home"), 5000);
	return (
		<div>
			<h1>hello</h1>
		</div>
	);
}

export default SandboxRouter;

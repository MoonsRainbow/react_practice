import { useEffect } from "react";
import { useBeforeLeave } from "hooks/useBeforeLeave";

function SandboxRouter() {
	const begForLife = () => console.log("Please don't go...");
	useBeforeLeave(begForLife);
	return (
		<div>
			<h1>hello</h1>
		</div>
	);
}

export default SandboxRouter;

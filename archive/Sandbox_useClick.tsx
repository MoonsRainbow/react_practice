import { useClick } from "hooks/useClick";

function SandboxRouter() {
	const onClick = () => {
		console.log("Hello World!");
	};
	const title = useClick<HTMLHeadingElement>(onClick);
	return (
		<div>
			<h1 ref={title}>hello</h1>
		</div>
	);
}

export default SandboxRouter;

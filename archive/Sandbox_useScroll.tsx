import { useScroll } from "hooks/useScroll";

function SandboxRouter() {
	const { y } = useScroll();
	return (
		<div>
			<h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>
				Hello
			</h1>
		</div>
	);
}

export default SandboxRouter;

import { useNotification } from "hooks/useNotification";

function SandboxRouter() {
	const fireNotification = useNotification("Hello World!", {
		body: "Hello World!",
	});
	return (
		<div>
			<h1>Hello</h1>
			<button onClick={fireNotification}>Fire!</button>
		</div>
	);
}

export default SandboxRouter;

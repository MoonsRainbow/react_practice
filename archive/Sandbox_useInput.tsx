import { useInput } from "hooks/useInput";

function SandboxRouter() {
	const maxLength = (s: string): boolean => {
		return s.length <= 10;
	};
	const blockInjection = (s: string): boolean => {
		return !s.includes("*");
	};
	const name = useInput("", blockInjection);
	return (
		<div>
			<h1>hello</h1>
			<input
				type="text"
				placeholder="Input your name..."
				{...name}
			/>
		</div>
	);
}

export default SandboxRouter;

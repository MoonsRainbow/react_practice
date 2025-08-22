import styled from "css/Button.module.css";
import { useConfirm } from "hooks/useConfirm";

function SandboxRouter() {
	const deleteTheWorld = () => console.log("Deleting the World!!!");
	const abort = () => console.log("Aborted...");
	const confirmDelete = useConfirm("Are you sure?", deleteTheWorld, abort);
	return (
		<div>
			<h1>hello</h1>
			<button
				className={styled.btn}
				onClick={confirmDelete}
			>
				Delete the world!
			</button>
		</div>
	);
}

export default SandboxRouter;

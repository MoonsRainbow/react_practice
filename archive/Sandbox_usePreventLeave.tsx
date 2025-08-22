import styled from "css/Button.module.css";
import { usePreventLeave } from "hooks/usePreventLeave";

function SandboxRouter() {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			<h1>hello</h1>
			<button
				className={styled.btn}
				onClick={enablePrevent}
			>
				Protect
			</button>
			<button
				className={styled.btn}
				onClick={disablePrevent}
			>
				UnProtect
			</button>
		</div>
	);
}

export default SandboxRouter;

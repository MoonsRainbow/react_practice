import { useFullScreen } from "hooks/useFullScreen";
import logoImg from "../resources/moons-rainbow.png";

function SandboxRouter() {
	const { isFull, imgRef, triggerFullEvent, exitFullEvent } = useFullScreen();
	return (
		<div>
			<h1>Hello</h1>
			<div ref={imgRef}>
				<img
					src={logoImg}
					alt="moons-rainbow.png"
				/>
				<button
					onClick={exitFullEvent}
					style={{ display: isFull ? "block" : "none" }}
				>
					Exit Full-Screen
				</button>
			</div>
			<button
				onClick={triggerFullEvent}
				style={{ display: isFull ? "none" : "block" }}
			>
				View Full-Screen
			</button>
		</div>
	);
}

export default SandboxRouter;

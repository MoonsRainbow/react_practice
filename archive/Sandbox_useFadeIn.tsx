import { useFadeIn } from "hooks/useFadeIn";

function SandboxRouter() {
	const fadeInHeading = useFadeIn<HTMLHeadingElement>(3);
	const fadeInParagraph = useFadeIn<HTMLParagraphElement>(3, 1);
	return (
		<div>
			<h1 {...fadeInHeading}>Hello</h1>
			<p {...fadeInParagraph}>Nice to meet you</p>
		</div>
	);
}

export default SandboxRouter;

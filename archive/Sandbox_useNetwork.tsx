import { useNetwork } from "hooks/useNetwork";

function SandboxRouter() {
	const handleNetworkChange = (status: boolean) => {
		console.log(`${status ? "OnLine" : "OffLine"} Now.`);
	};
	const onLine = useNetwork(handleNetworkChange);
	return (
		<div>
			<h1>Hello {onLine ? "OnLine" : "OffLine"}</h1>
		</div>
	);
}

export default SandboxRouter;

import { useState, useEffect } from "react";

function App() {
	const [isShow, setShow] = useState(false);
	const onClick = () => setShow((prev) => !prev);

	function Greeting() {
		useEffect(() => {
			console.log("Hi!");
			return () => console.log("Bye!");
		}, []);
		return <h1>Hello!</h1>;
	}

	return (
		<div>
			<button onClick={onClick}>{isShow ? "Hide" : "Show"}</button>
			{isShow && <Greeting />}
		</div>
	);
}

export default App;

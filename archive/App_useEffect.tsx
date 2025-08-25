import { useState, useEffect, ChangeEvent } from "react";
import Button from "./components/Button";
import styles from "./css/App.module.css";

function App() {
	const [count, setCount] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setCount((prev) => prev + 1);
	const onChange = (e: ChangeEvent<HTMLInputElement>) =>
		setKeyword(e.target.value);
	console.log("I run all the time.");
	useEffect(() => {
		console.log("I run only once.");
	}, []);
	useEffect(() => {
		console.log("I run when 'count' changes.");
	}, [count]);
	useEffect(() => {
		console.log("I run when 'keyword' changes.");
	}, [keyword]);
	useEffect(() => {
		console.log("I run when 'count or keyword' changes.");
	}, [count, keyword]);
	return (
		<div>
			<input
				type="text"
				placeholder="Search here..."
				value={keyword}
				onChange={onChange}
			/>
			<h1 className={styles.title}>{count}</h1>
			<Button
				buttonLabelText={"Click me"}
				onClick={onClick}
			/>
		</div>
	);
}

export default App;

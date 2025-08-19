import { useState, ChangeEvent, FormEvent, MouseEvent } from "react";

function App() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState<string[]>([]);
	const onTodoChange = (e: ChangeEvent<HTMLInputElement>) =>
		setTodo(e.target.value);
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todo === "") return;
		setTodoList((prev) => [todo, ...prev]);
		setTodo("");
	};
	const onDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
		const li = e.currentTarget.parentElement;
		setTodoList((prev) => prev.filter((_, index) => String(index) !== li!.id));
	};
	return (
		<div>
			<h1>My Todo List ({todoList.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Write your todo..."
					value={todo}
					onChange={onTodoChange}
				/>
				<button type="submit">Add Todo</button>
			</form>
			<hr></hr>
			<ul>
				{todoList.map((item, index) => (
					<li
						id={index.toString()}
						key={index}
					>
						<p>{item}</p>
						<button onClick={onDeleteClick}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

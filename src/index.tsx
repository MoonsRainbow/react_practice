import React from "react";
import ReactDOM from "react-dom/client";
import "./css/tokens.css";
import { GlobalStyle } from "css/GlobalStyle";
import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);

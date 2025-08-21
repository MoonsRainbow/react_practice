import HomeRoute from "routes/Home";
import DetailRoute from "routes/Detail";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					index
					element={<HomeRoute />}
				/>
				<Route
					path="/movie/:id"
					element={<DetailRoute />}
				/>
				<Route
					path="*"
					element={<Navigate to="/"></Navigate>}
				/>
			</Routes>
		</Router>
	);
}

export default App;

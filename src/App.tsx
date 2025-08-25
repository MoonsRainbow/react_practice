// import HomeRoute from "routes/Home";
// import DetailRoute from "routes/Detail";
import SandboxRouter from "routes/Sandbox";
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
				{/* <Route
					index
					element={<HomeRoute />}
					/>
					<Route
					path="/movie/:id"
					element={<DetailRoute />}
					/> */}
				<Route
					index
					// path="/sandbox"
					element={<SandboxRouter />}
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

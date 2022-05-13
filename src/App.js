import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="main"></div>
			<Routes></Routes>
		</>
	);
}

export default App;

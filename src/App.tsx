import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MercadoPage from "./pages/MercadoPage";
import DrogariaPage from "./pages/DrogariaPage";
import ShoppingPage from "./pages/ShoppingPage";
import Footer from "./components/Footer";

const App = () => (
	<BrowserRouter>
		<Navbar />
		<div style={{ marginTop: 56 }} className="w-100" />{" "}
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/mercado" element={<MercadoPage />} />
			<Route path="/drogaria" element={<DrogariaPage />} />
			<Route path="/shopping" element={<ShoppingPage />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);

export default App;

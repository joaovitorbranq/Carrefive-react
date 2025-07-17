import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MercadoPage from "./pages/MercadoPage";
import LoginPage from "./pages/LoginPage";
import DrogariaPage from "./pages/DrogariaPage";
import ShoppingPage from "./pages/ShoppingPage";
import Footer from "./components/Footer";
import FavoritesPage from "./pages/FavoritesPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";

const App = () => {
	const defaultStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	};

	return (
		<BrowserRouter>
			<div style={defaultStyles}>
				<Navbar />
				<div style={{ marginTop: 56, flex: 1 }}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/mercado" element={<MercadoPage />} />
						<Route path="/drogaria" element={<DrogariaPage />} />
						<Route path="/shopping" element={<ShoppingPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/favorites" element={<FavoritesPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/carrinho" element={<CartPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;

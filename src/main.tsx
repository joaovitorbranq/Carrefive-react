import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UserProvider } from "./contexts/UserProvider.tsx";
import { CartProvider } from "./contexts/CartContext";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<UserProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</UserProvider>
	</StrictMode>
);

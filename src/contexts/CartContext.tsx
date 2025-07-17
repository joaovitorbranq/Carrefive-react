import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	type ReactNode,
} from "react";
import type { ICartItem } from "../types/types";

interface CartContextType {
	cartItems: ICartItem[];
	addItem: (item: Omit<ICartItem, "quantity">) => void;
	removeItem: (productId: number) => void;
	clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
	undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [items, setItems] = useState<ICartItem[]>(() => {
		const stored = localStorage.getItem("cart");
		return stored ? JSON.parse(stored) : [];
	});

	// atualiza sempre que items mudar
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(items));
	}, [items]);

	const addItem = (item: Omit<ICartItem, "quantity">) => {
		setItems((prev) => {
			const existing = prev.find((i) => i.productId === item.productId);
			if (existing) {
				return prev.map((i) =>
					i.productId === item.productId
						? { ...i, quantity: i.quantity + 1 }
						: i
				);
			}
			return [...prev, { ...item, quantity: 1 }];
		});
	};

	const removeItem = (productId: number) => {
		setItems((prev) => prev.filter((item) => item.productId !== productId));
	};

	const clearCart = () => {
		setItems([]);
	};

	return (
		<CartContext.Provider
			value={{ cartItems: items, addItem, removeItem, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

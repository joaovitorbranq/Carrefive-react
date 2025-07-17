// hooks/useFavorites.ts
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useUser } from "./useUser";
import type { IProduct } from "../types/types";

export const useFavorites = () => {
	const { user } = useUser();
	const [favorites, setFavorites] = useState<IProduct[]>([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			if (!user) return;
			try {
				const response = await api.get(`/favorites/user/${user.id}`);
				setFavorites(response.data);
			} catch (error) {
				console.error("Erro ao buscar favoritos:", error);
			}
		};

		fetchFavorites();
	}, [user]);

	const isFavorited = (productId: number) =>
		favorites.some((fav) => fav.id === productId);

	const addFavorite = async (productId: number) => {
		if (!user) return;
		await api.post(`/favorites`, {
			userId: user.id,
			productId,
		});
		setFavorites((prev) => [...prev, { id: productId } as IProduct]);
	};

	const removeFavorite = async (productId: number) => {
		if (!user) return;
		await api.delete(`/favorites`, {
			data: { userId: user.id, productId },
		});
		setFavorites((prev) => prev.filter((fav) => fav.id !== productId));
	};

	return { favorites, isFavorited, addFavorite, removeFavorite };
};

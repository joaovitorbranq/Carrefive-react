import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import type { IProduct } from "../types/types";
import { useUser } from "./useUser";

export function useFavorites() {
	const { user } = useUser();
	const [favorites, setFavorites] = useState<IProduct[]>([]);

	const fetchFavorites = useCallback(async () => {
		if (!user) return;
		try {
			const response = await api.get(`/favorites/user/${user.id}`);
			setFavorites(response.data);
		} catch (error) {
			console.error("Erro ao buscar favoritos:", error);
		}
	}, [user]);

	useEffect(() => {
		fetchFavorites();
	}, [fetchFavorites]);

	const addFavorite = async (productId: number) => {
		if (!user) return;
		try {
			await api.post("/favorites", {
				userId: user.id,
				productId,
			});
			await fetchFavorites();
		} catch (error) {
			console.error("Erro ao adicionar favorito:", error);
		}
	};

	const removeFavorite = async (productId: number) => {
		if (!user) return;
		try {
			await api.delete("/favorites", {
				data: {
					userId: user.id,
					productId,
				},
			});
			await fetchFavorites();
		} catch (error) {
			console.error("Erro ao remover favorito:", error);
		}
	};

	const isFavorited = (productId: number) =>
		favorites.some((fav) => fav.id === productId);

	return {
		favorites,
		isFavorited,
		addFavorite,
		removeFavorite,
		fetchFavorites,
	};
}

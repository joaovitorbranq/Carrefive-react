import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { useUser } from "../hooks/useUser";
import type { IProduct } from "../types/types";

const FavoritesPage = () => {
	const { user } = useUser();
	const [favorites, setFavorites] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFavorites = async () => {
			if (!user) return;

			try {
				const response = await api.get(`/favorites/user/${user.id}`);
				setFavorites(response.data);
			} catch (error) {
				console.error("Erro ao buscar favoritos:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchFavorites();
	}, [user]);

	const handleRemove = async (productId: number) => {
		if (!user) return;

		try {
			await api.delete(`/favorites`, {
				data: { userId: user.id, productId },
			});
			setFavorites((prev) => prev.filter((p) => p.id !== productId));
		} catch (error) {
			console.error("Erro ao remover favorito:", error);
		}
	};

	if (!user) {
		return <div className="container mt-5">Você precisa estar logado.</div>;
	}

	if (loading) {
		return <div className="container mt-5">Carregando...</div>;
	}

	return (
		<div className="container mt-5">
			<h2 className="mb-4">Meus Favoritos</h2>
			{favorites.length === 0 ? (
				<p>Nenhum produto favoritado ainda.</p>
			) : (
				<table className="table table-bordered align-middle">
					<thead className="table-light">
						<tr>
							<th style={{ width: "120px" }}>Imagem</th>
							<th>Nome</th>
							<th>Preço</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{favorites.map((product) => (
							<tr key={product.id}>
								<td>
									<img
										src={product.imgSrc || "/placeholder.jpg"}
										alt={product.name}
										className="img-fluid"
										style={{ maxWidth: "100px" }}
									/>
								</td>
								<td>{product.name}</td>
								<td>{`R$${product.price.toFixed(2)}`}</td>
								<td>
									<button
										className="btn btn-danger btn-sm"
										onClick={() => handleRemove(product.id)}
									>
										Remover
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default FavoritesPage;

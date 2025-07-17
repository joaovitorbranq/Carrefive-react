import React, { useEffect } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { useUser } from "../hooks/useUser";

const FavoritesPage = () => {
	const { user } = useUser();
	const { favorites, fetchFavorites, removeFavorite } = useFavorites();

	useEffect(() => {
		if (user?.id) {
			fetchFavorites();
		}
	}, [user]);

	if (!user) {
		return (
			<p className="mt-5 text-center">Faça login para ver seus favoritos.</p>
		);
	}

	if (!favorites.length) {
		return <p className="mt-5 text-center">Você ainda não possui favoritos.</p>;
	}

	return (
		<div className="container mt-5">
			<h2 className="mb-4">Meus Favoritos</h2>
			<table className="table table-bordered align-middle">
				<thead className="table-light">
					<tr>
						<th style={{ width: "100px" }}>Imagem</th>
						<th>Nome</th>
						<th>Preço</th>
						<th>Categoria</th>
						<th style={{ width: "150px" }}>Ações</th>
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
									style={{ width: "80px", height: "80px", objectFit: "cover" }}
								/>
							</td>
							<td>{product.name}</td>
							<td>R${product.price?.toFixed(2)}</td>
							<td>{product.productType?.name || "Não informado"}</td>
							<td>
								<button
									className="btn btn-danger w-100"
									onClick={() => removeFavorite(product.id)}
								>
									Remover
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FavoritesPage;

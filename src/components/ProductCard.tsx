import React from "react";
import type { IProduct } from "../types/types";
import { formatNumberToPrice } from "../utils/utils";
import { useUser } from "../hooks/useUser";
import { useFavorites } from "../hooks/useFavorites";

type ProductCardProps = {
	product: IProduct;
	onBuy: () => void;
};

const ProductCard = ({ product, onBuy }: ProductCardProps) => {
	const { user } = useUser();
	const { isFavorited, addFavorite, removeFavorite } = useFavorites();
	const favorited = isFavorited(product.id);

	const handleToggleFavorite = async (e: React.MouseEvent) => {
		e.preventDefault();
		if (!user) return;

		if (favorited) {
			await removeFavorite(product.id);
		} else {
			await addFavorite(product.id);
		}
	};

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={product.imgSrc || "/placeholder.jpg"}
					className="card-img-top"
					alt={product.name}
				/>
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-start">
						<h5 className="card-title mb-0">{product.name}</h5>

						{user && (
							<a
								href="#"
								onClick={handleToggleFavorite}
								className="text-danger"
								title={favorited ? "Desfavoritar" : "Favoritar"}
							>
								<i
									className={`bi ${favorited ? "bi-heart-fill" : "bi-heart"}`}
								></i>
							</a>
						)}
					</div>
					<p className="card-text">{product.description}</p>
					<p className="card-text">{`R$${formatNumberToPrice(
						product.price
					)}`}</p>
					<button className="btn btn-primary w-100" onClick={onBuy}>
						Comprar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

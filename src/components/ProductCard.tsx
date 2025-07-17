import React from "react";
import type { IProduct } from "../types/types";
import { formatNumberToPrice } from "../utils/utils";
import { useFavorites } from "../hooks/useFavorites";

type ProductCardProps = {
	product: IProduct;
	onBuy: () => void;
};

const ProductCard = ({ product, onBuy }: ProductCardProps) => {
	const { isFavorited, addFavorite } = useFavorites();
	const isFav = isFavorited(product.id);

	const handleFavorite = () => {
		if (!isFav) {
			addFavorite(product.id);
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
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text">{product.description}</p>
					<p className="card-text">{`R$${formatNumberToPrice(
						product.price
					)}`}</p>
					<button className="btn btn-primary w-100 mb-2" onClick={onBuy}>
						Comprar
					</button>
					<button
						className={`btn w-100 ${
							isFav ? "btn-danger" : "btn-outline-secondary"
						}`}
						onClick={handleFavorite}
					>
						{isFav ? "Desfavoritar" : "Favoritar"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

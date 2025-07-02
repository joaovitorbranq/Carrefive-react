import React from "react";
import type { IProduct } from "../types/types";

type ProductCardProps = {
	product: IProduct;
	onBuy: () => void;
};

const ProductCard = ({ product, onBuy }: ProductCardProps) => {
	const { productName, description, imgSrc } = product;

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={imgSrc || "/placeholder.jpg"}
					className="card-img-top"
					alt={productName}
				/>
				<div className="card-body">
					<h5 className="card-title">{productName}</h5>
					<p className="card-text">{description}</p>
					<button className="btn btn-primary w-100" onClick={onBuy}>
						Comprar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

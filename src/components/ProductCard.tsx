import React from "react";
import type { IProduct } from "../types/types";
import { formatNumberToPrice } from "../utils/utils";

type ProductCardProps = {
	product: IProduct;
	onBuy: () => void;
};

const ProductCard = ({ product, onBuy }: ProductCardProps) => {
	const { name, description, imgSrc } = product;

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={imgSrc || "/placeholder.jpg"}
					className="card-img-top"
					alt={name}
				/>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{description}</p>
					<p className="card-text">{`${
						product.currency.label
					} ${formatNumberToPrice(product.price)}`}</p>
					<button className="btn btn-primary w-100" onClick={onBuy}>
						Comprar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

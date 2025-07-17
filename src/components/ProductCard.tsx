import React from "react";
import type { IProduct } from "../types/types";
import { formatNumberToPrice } from "../utils/utils";
import { useUser } from "../hooks/useUser";
import { useFavorites } from "../hooks/useFavorites";
import { useCart } from "../hooks/useCart";
import PlaceholderImg from "../assets/img/placeholder.jpg";

type ProductCardProps = {
	product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
	const { user } = useUser();
	const { isFavorited, addFavorite, removeFavorite } = useFavorites();
	const { cartItems, addItem, updateQuantity, removeItem } = useCart();

	const favorited = isFavorited(product.id);

	const itemInCart = cartItems.find((item) => item.productId === product.id);
	const quantity = itemInCart?.quantity || 0;

	const handleToggleFavorite = async (e: React.MouseEvent) => {
		e.preventDefault();
		if (!user) return;

		if (favorited) {
			await removeFavorite(product.id);
		} else {
			await addFavorite(product.id);
		}
	};

	const handleAddToCart = () => {
		addItem({
			productId: product.id,
			name: product.name,
			price: product.price,
			imgSrc: product.imgSrc || PlaceholderImg,
		});
	};

	const handleIncrement = () => {
		addItem({
			productId: product.id,
			name: product.name,
			price: product.price,
			imgSrc: product.imgSrc || PlaceholderImg,
		});
	};

	const handleDecrement = () => {
		if (quantity === 1) {
			removeItem(product.id);
		} else {
			updateQuantity(product.id, quantity - 1);
		}
	};

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={product.imgSrc || PlaceholderImg}
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

					{quantity > 0 ? (
						<div className="d-flex justify-content-between align-items-center">
							<button
								className="btn btn-outline-danger"
								onClick={handleDecrement}
								style={{ width: "40px" }}
							>
								-
							</button>
							<span>{quantity}</span>
							<button
								className="btn btn-outline-success"
								onClick={handleIncrement}
								style={{ width: "40px" }}
							>
								+
							</button>
						</div>
					) : (
						<button className="btn btn-primary w-100" onClick={handleAddToCart}>
							Comprar
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

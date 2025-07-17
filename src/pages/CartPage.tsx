import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import { formatNumberToPrice } from "../utils/utils";

const CartPage = () => {
	const { cartItems, removeItem, updateQuantity } = useCart();
	const [quantities, setQuantities] = useState<Record<number, string>>(() =>
		Object.fromEntries(
			cartItems.map((item) => [item.productId, item.quantity.toString()])
		)
	);

	const handleChange = (productId: number, value: string) => {
		const parsed = parseInt(value, 10);

		if (value === "" || (!Number.isNaN(parsed) && parsed >= 0)) {
			setQuantities((prev) => ({
				...prev,
				[productId]: value,
			}));
		}
	};

	const handleBlur = (productId: number) => {
		const raw = quantities[productId];
		const parsed = parseInt(raw, 10);

		if (!isNaN(parsed) && parsed > 0) {
			updateQuantity(productId, parsed);
		} else {
			const original = cartItems.find((item) => item.productId === productId);
			if (original) {
				setQuantities((prev) => ({
					...prev,
					[productId]: original.quantity.toString(),
				}));
			}
		}
	};

	const totalCart = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	if (cartItems.length === 0) {
		return <p className="mt-5 text-center">Seu carrinho está vazio.</p>;
	}

	return (
		<div className="container mt-5">
			<h2 className="mb-4">Meu Carrinho</h2>
			<table className="table table-bordered align-middle">
				<thead className="table-light">
					<tr>
						<th style={{ width: "100px" }}>Imagem</th>
						<th>Nome</th>
						<th>Preço</th>
						<th>Quantidade</th>
						<th>Total</th>
						<th style={{ width: "150px" }}>Ações</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((item) => (
						<tr key={item.productId}>
							<td>
								<img
									src={item.imgSrc || "/placeholder.jpg"}
									alt={item.name}
									className="img-fluid"
									style={{
										width: "80px",
										height: "80px",
										objectFit: "cover",
									}}
								/>
							</td>
							<td>{item.name}</td>
							<td>R${formatNumberToPrice(item.price)}</td>
							<td style={{ width: "100px" }}>
								<input
									type="text"
									value={quantities[item.productId] || ""}
									onChange={(e) => handleChange(item.productId, e.target.value)}
									onBlur={() => handleBlur(item.productId)}
									className="form-control form-control-sm text-center"
								/>
							</td>
							<td>R${formatNumberToPrice(item.price * item.quantity)}</td>
							<td>
								<button
									className="btn btn-danger w-100"
									onClick={() => removeItem(item.productId)}
								>
									Remover
								</button>
							</td>
						</tr>
					))}
					<tr>
						<td colSpan={4} className="text-end fw-bold">
							Total do Carrinho:
						</td>
						<td colSpan={2} className="fw-bold">
							R${formatNumberToPrice(totalCart)}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CartPage;

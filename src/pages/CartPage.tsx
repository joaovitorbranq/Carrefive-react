import React from "react";
import { useCart } from "../hooks/useCart";
import { formatNumberToPrice } from "../utils/utils";

const CartPage = () => {
	const { cartItems, removeItem } = useCart();

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
									style={{ width: "80px", height: "80px", objectFit: "cover" }}
								/>
							</td>
							<td>{item.name}</td>
							<td>R${formatNumberToPrice(item.price)}</td>
							<td>{item.quantity}</td>
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
				</tbody>
			</table>
		</div>
	);
};

export default CartPage;

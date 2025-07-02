import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalCompra from "../components/ModalCompra";
import ModalAddProduct from "../components/ModalAddProduct";

import DipironaImg from "../assets/img/drogaria/dipirona.webp";
import DorflexImg from "../assets/img/drogaria/dorflex.webp";
import HidratanteImg from "../assets/img/drogaria/hidratante.webp";
import ProtetorSolarImg from "../assets/img/drogaria/protetor-solar.webp";
import PlaceholderImg from "../assets/img/placeholder.jpg";

const initialProducts = [
	{
		img: DipironaImg,
		title: "Dipirona",
		description: "Para dores de cabeça e febre.",
	},
	{
		img: DorflexImg,
		title: "Dorflex",
		description: "Alívio rápido para dores comuns.",
	},
	{
		img: HidratanteImg,
		title: "Hidratante",
		description: "Hidrata e refresca a pele.",
	},
	{
		img: ProtetorSolarImg,
		title: "Protetor Solar",
		description: "Protege sua pele dos raios UV.",
	},
];

const DrogariaPage = () => {
	const [showBuyModal, setShowBuyModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [products, setProducts] = useState(initialProducts);

	const handleAddProduct = (prod: {
		productName: string;
		description: string;
		unitType: string;
	}) => {
		setProducts([
			...products,
			{
				img: PlaceholderImg,
				title: prod.productName,
				description: prod.description,
			},
		]);
		setShowAddModal(false);
	};

	return (
		<section className="py-5">
			<div className="container">
				<h2 className="mb-4">Drogaria</h2>
				<div className="d-flex justify-content-end align-items-center mb-4">
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => setShowAddModal(true)}
					>
						Adicionar produto
					</button>
				</div>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					{products.map((p, i) => (
						<ProductCard key={i} {...p} onBuy={() => setShowBuyModal(true)} />
					))}
				</div>
				<ModalCompra
					show={showBuyModal}
					onClose={() => setShowBuyModal(false)}
					onConcluir={() => setShowBuyModal(false)}
				/>
				<ModalAddProduct
					show={showAddModal}
					onClose={() => setShowAddModal(false)}
					onSave={handleAddProduct}
				/>
			</div>
		</section>
	);
};

export default DrogariaPage;

import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalBuyProduct from "../components/ModalBuyProduct";
import ModalAddProduct from "../components/ModalAddProduct";

import ChandelleImg from "../assets/img/mercado/chandelle.webp";
import DesodoranteImg from "../assets/img/mercado/desodorante.webp";
import ChocolateImg from "../assets/img/mercado/ferrero-rocher.webp";
import VinhoImg from "../assets/img/mercado/vinho.webp";
import PlaceholderImg from "../assets/img/placeholder.jpg";

const initialProducts = [
	{
		img: ChandelleImg,
		title: "Chandelle",
		description: "Chandelle sabor chocolate.",
	},
	{
		img: DesodoranteImg,
		title: "Desodorante",
		description: "Desodorante Dove original.",
	},
	{
		img: ChocolateImg,
		title: "Chocolate",
		description: "Chocolate Ferrero Rocher.",
	},
	{
		img: VinhoImg,
		title: "Vinho",
		description: "Vinho Reservado Carmenere.",
	},
];

const MercadoPage = () => {
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
				img: PlaceholderImg, // imagem de placeholder
				title: prod.productName,
				description: prod.description,
			},
		]);
		setShowAddModal(false);
	};

	return (
		<section className="py-5">
			<div className="container">
				<h2 className="mb-4">Mercado</h2>
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
				<ModalBuyProduct
					show={showBuyModal}
					onClose={() => setShowBuyModal(false)}
					onConcluir={() => setShowBuyModal(false)}
				/>
				<ModalAddProduct
					isOpen={showAddModal}
					onClose={() => setShowAddModal(false)}
					onSave={handleAddProduct}
				/>
			</div>
		</section>
	);
};

export default MercadoPage;

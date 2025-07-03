import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalBuyProduct from "../components/ModalBuyProduct";
import ModalAddProduct from "../components/ModalAddProduct";

import DipironaImg from "../assets/img/drogaria/dipirona.webp";
import DorflexImg from "../assets/img/drogaria/dorflex.webp";
import HidratanteImg from "../assets/img/drogaria/hidratante.webp";
import ProtetorSolarImg from "../assets/img/drogaria/protetor-solar.webp";
import PlaceholderImg from "../assets/img/placeholder.jpg";
import type { ICurrency, IProduct } from "../types/types";

const defaultCurrency: ICurrency = {
	id: 2,
	name: "dolar",
	label: "US$",
};

const initialProducts: IProduct[] = [
	{
		name: "Dipirona",
		description: "Para dores de cabeça e febre.",
		price: 10.0,
		currency: defaultCurrency,
		imgSrc: DipironaImg,
	},
	{
		name: "Dorflex",
		description: "Alívio rápido para dores comuns.",
		price: 12.5,
		currency: defaultCurrency,
		imgSrc: DorflexImg,
	},
	{
		name: "Hidratante",
		description: "Hidrata e refresca a pele.",
		price: 20.0,
		currency: defaultCurrency,
		imgSrc: HidratanteImg,
	},
	{
		name: "Protetor Solar",
		description: "Protege sua pele dos raios UV.",
		price: 35.0,
		currency: defaultCurrency,
		imgSrc: ProtetorSolarImg,
	},
];

const DrogariaPage = () => {
	const [showBuyModal, setShowBuyModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [products, setProducts] = useState(initialProducts);

	const handleAddProduct = (prod: IProduct) => {
		setProducts([
			...products,
			{
				...prod,
				imgSrc: PlaceholderImg,
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
						<ProductCard
							key={i}
							product={p}
							onBuy={() => setShowBuyModal(true)}
						/>
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

export default DrogariaPage;

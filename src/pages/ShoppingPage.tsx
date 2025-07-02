import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalBuyProduct from "../components/ModalBuyProduct";
import ModalAddProduct from "../components/ModalAddProduct";

import CamaImg from "../assets/img/shopping/cama.webp";
import CelularImg from "../assets/img/shopping/celular.webp";
import PneuImg from "../assets/img/shopping/pneu.webp";
import TvImg from "../assets/img/shopping/tv.webp";
import PlaceholderImg from "../assets/img/placeholder.jpg";
import type { ICurrency, IProduct } from "../types/types";

const defaultCurrency: ICurrency = {
	id: 1,
	name: "real",
	label: "R$",
};

const initialProducts: IProduct[] = [
	{
		name: "Cama Box",
		description: "Cama box de solteiro.",
		price: 1200,
		currency: defaultCurrency,
		imgSrc: CamaImg,
	},
	{
		name: "Iphone 16",
		description: "Iphone 16 PRO MAX.",
		price: 9999,
		currency: defaultCurrency,
		imgSrc: CelularImg,
	},
	{
		name: "Pneu",
		description: "Pneu para carros de médio porte.",
		price: 450,
		currency: defaultCurrency,
		imgSrc: PneuImg,
	},
	{
		name: "TV",
		description: "SmartTV 50 polegadas.",
		price: 2500,
		currency: defaultCurrency,
		imgSrc: TvImg,
	},
];

const ShoppingPage = () => {
	const [showBuyModal, setShowBuyModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [products, setProducts] = useState<IProduct[]>(initialProducts);

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
				<h2 className="mb-4">Shopping</h2>
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

export default ShoppingPage;

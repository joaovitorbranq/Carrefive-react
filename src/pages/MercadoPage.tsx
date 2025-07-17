import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalBuyProduct from "../components/ModalBuyProduct";
import ModalAddProduct from "../components/ModalAddProduct";
import PlaceholderImg from "../assets/img/placeholder.jpg";
import type { IProduct, IProductFormValues } from "../types/types";
import { createProduct, fetchProductsByType } from "../services/product";

const MercadoPage = () => {
	const [showBuyModal, setShowBuyModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const loadProducts = async (page: number = 0) => {
		try {
			const data = await fetchProductsByType(2, page);
			setProducts(data.content);
			setTotalPages(data.totalPages);
			setCurrentPage(data.number);
		} catch (error) {
			console.error("Erro ao buscar produtos:", error);
		}
	};

	useEffect(() => {
		loadProducts();
	}, []);

	const handlePageChange = (page: number) => {
		loadProducts(page);
	};

	const handleAddProduct = async (formData: IProductFormValues) => {
		try {
			const newProduct = await createProduct(formData, 2); // 2 = Mercado
			setProducts([...products, newProduct]);
			setShowAddModal(false);
		} catch (error) {
			console.error("Erro ao adicionar produto:", error);
		}
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
					{products.map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>

				{/* Paginação Bootstrap */}
				<nav className="mt-4">
					<ul className="pagination justify-content-center">
						{Array.from({ length: totalPages }).map((_, index) => (
							<li
								key={index}
								className={`page-item ${index === currentPage ? "active" : ""}`}
							>
								<button
									className="page-link"
									onClick={() => handlePageChange(index)}
								>
									{index + 1}
								</button>
							</li>
						))}
					</ul>
				</nav>

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

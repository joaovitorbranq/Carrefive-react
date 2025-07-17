import React, { useEffect, useState } from "react";
import type { IProduct, IProductFormValues } from "../types/types";

interface IModalAddProductProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: IProductFormValues) => void;
}

const ModalAddProduct: React.FC<IModalAddProductProps> = ({
	isOpen,
	onClose,
	onSave,
}) => {
	const [formProduto, setFormProduto] = useState<IProductFormValues>({
		name: "",
		description: "",
		price: 0,
		imgSrc: "",
	});

	useEffect(() => {
		if (isOpen) {
			setFormProduto({
				name: "",
				description: "",
				price: 0,
				imgSrc: "",
			});
		}
	}, [isOpen]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setFormProduto((prev) => ({
			...prev,
			[name]: name === "price" ? Number(value) : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(formProduto);
	};

	console.log(formProduto, "formProduto");

	if (!isOpen) return null;

	return (
		<div
			className="modal fade show d-block"
			tabIndex={-1}
			role="dialog"
			style={{ background: "rgba(0,0,0,.4)" }}
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Adicionar Produto</h5>
						<button
							type="button"
							className="btn-close"
							onClick={onClose}
							aria-label="Fechar"
						></button>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="modal-body">
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Nome do produto
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									name="name"
									placeholder="Digite o nome"
									value={formProduto.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="description" className="form-label">
									Descrição
								</label>
								<textarea
									className="form-control"
									id="description"
									name="description"
									rows={3}
									placeholder="Descreva o produto"
									value={formProduto.description}
									onChange={handleChange}
									required
								></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="price" className="form-label">
									Preço
								</label>
								<input
									type="number"
									min="0"
									step="0.01"
									inputMode="decimal"
									className="form-control"
									id="price"
									name="price"
									placeholder="Digite o preço"
									value={formProduto.price}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="imgSrc" className="form-label">
									URL da Imagem (opcional)
								</label>
								<input
									type="text"
									className="form-control"
									id="imgSrc"
									name="imgSrc"
									placeholder="https://exemplo.com/imagem.jpg"
									value={formProduto.imgSrc ?? ""}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={onClose}
							>
								Cancelar
							</button>
							<button type="submit" className="btn btn-primary">
								Salvar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalAddProduct;

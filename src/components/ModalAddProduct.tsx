import React, { useEffect, useState } from "react";

export interface ICurrency {
	id: number;
	name: string;
	label: string;
}

type ModalAddProductProps = {
	show: boolean;
	onClose: () => void;
	onSave: (data: {
		productName: string;
		description: string;
		price: number;
		currency: number; // id da currency selecionada
	}) => void;
};

const ModalAddProduct: React.FC<ModalAddProductProps> = ({
	show,
	onClose,
	onSave,
}) => {
	const [form, setForm] = useState({
		productName: "",
		description: "",
		price: 0,
		currency: 1, // default id da currency
	});

	const [currencies] = useState<ICurrency[]>([
		{ id: 1, name: "real", label: "R$" },
		{ id: 2, name: "dolar", label: "US$" },
		{ id: 3, name: "euro", label: "€" },
	]);

	useEffect(() => {
		if (show)
			setForm({
				productName: "",
				description: "",
				price: 0,
				currency: currencies[0]?.id || 1,
			});
	}, [show, currencies]);

	if (!show) return null;

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]:
				name === "price"
					? Number(value)
					: name === "currency"
					? Number(value)
					: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(form);
	};

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
								<label htmlFor="productName" className="form-label">
									Nome do produto
								</label>
								<input
									type="text"
									className="form-control"
									id="productName"
									name="productName"
									placeholder="Digite o nome"
									value={form.productName}
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
									value={form.description}
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
									className="form-control"
									id="price"
									name="price"
									placeholder="Digite o preço"
									value={form.price}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="currency" className="form-label">
									Moeda
								</label>
								<select
									className="form-select"
									id="currency"
									name="currency"
									value={form.currency}
									onChange={handleChange}
									required
								>
									{currencies.map((currency) => (
										<option key={currency.id} value={currency.id}>
											{currency.label}
										</option>
									))}
								</select>
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

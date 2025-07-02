import React from "react";
type ModalAddProductProps = {
	show: boolean;
	onClose: () => void;
	onSave: (data: {
		productName: string;
		description: string;
		unitType: string;
	}) => void;
};

const ModalAddProduct: React.FC<ModalAddProductProps> = ({
	show,
	onClose,
	onSave,
}) => {
	const [form, setForm] = React.useState({
		productName: "",
		description: "",
		unitType: "",
	});

	React.useEffect(() => {
		if (show) setForm({ productName: "", description: "", unitType: "" });
	}, [show]);

	if (!show) return null;

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
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
								<label htmlFor="unitType" className="form-label">
									Unidade de medida
								</label>
								<select
									className="form-select"
									id="unitType"
									name="unitType"
									value={form.unitType}
									onChange={handleChange}
									required
								>
									<option value="" disabled>
										Selecione
									</option>
									<option value="kg">kg</option>
									<option value="gramas">gramas</option>
									<option value="litros">litros</option>
									<option value="metros">metros</option>
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

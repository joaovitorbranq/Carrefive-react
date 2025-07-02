import React, { useEffect, useState } from "react";

interface IModalBuyProductProps {
	show: boolean;
	onClose: () => void;
	onConcluir: (qtd: number) => void;
}

const ModalBuyProduct: React.FC<IModalBuyProductProps> = ({
	show,
	onClose,
	onConcluir,
}) => {
	const [qtd, setQtd] = useState(1);

	useEffect(() => {
		if (show) setQtd(1);
	}, [show]);

	if (!show) return null;

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
						<h5 className="modal-title">Comprar Produto</h5>
						<button
							type="button"
							className="btn-close"
							onClick={onClose}
							aria-label="Fechar"
						></button>
					</div>
					<div className="modal-body">
						<label htmlFor="quantidade" className="form-label">
							Quantidade:
						</label>
						<input
							type="number"
							className="form-control"
							id="quantidade"
							min="1"
							value={qtd}
							onChange={(e) => setQtd(Number(e.target.value))}
						/>
					</div>
					<div className="modal-footer d-flex justify-content-between">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={onClose}
						>
							Cancelar
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => onConcluir(qtd)}
						>
							Concluir
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalBuyProduct;

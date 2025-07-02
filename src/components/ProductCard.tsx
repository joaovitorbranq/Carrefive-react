type ProductCardProps = {
	img: string;
	title: string;
	description: string;
	onBuy: () => void;
};

const ProductCard = ({ img, title, description, onBuy }: ProductCardProps) => (
	<div className="col">
		<div className="card h-100">
			<img src={img} className="card-img-top" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<button className="btn btn-primary w-100" onClick={onBuy}>
					Comprar
				</button>
			</div>
		</div>
	</div>
);

export default ProductCard;

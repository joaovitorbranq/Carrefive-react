import banner1 from "../assets/img/banners/banner1.webp";
import banner2 from "../assets/img/banners/banner2.webp";
import banner3 from "../assets/img/banners/banner3.webp";

const Carousel = () => (
	<div
		id="mainCarousel"
		className="carousel slide"
		data-bs-ride="carousel"
		style={{ marginTop: 56 }}
	>
		<div className="carousel-indicators">
			<button
				type="button"
				data-bs-target="#mainCarousel"
				data-bs-slide-to="0"
				className="active"
				aria-current="true"
				aria-label="Slide 1"
			></button>
			<button
				type="button"
				data-bs-target="#mainCarousel"
				data-bs-slide-to="1"
				aria-label="Slide 2"
			></button>
			<button
				type="button"
				data-bs-target="#mainCarousel"
				data-bs-slide-to="2"
				aria-label="Slide 3"
			></button>
		</div>
		<div className="carousel-inner">
			<div className="carousel-item active">
				<img src={banner1} className="d-block w-100" alt="Banner 1" />
			</div>
			<div className="carousel-item">
				<img src={banner2} className="d-block w-100" alt="Banner 2" />
			</div>
			<div className="carousel-item">
				<img src={banner3} className="d-block w-100" alt="Banner 3" />
			</div>
		</div>
		<button
			className="carousel-control-prev"
			type="button"
			data-bs-target="#mainCarousel"
			data-bs-slide="prev"
		>
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		</button>
		<button
			className="carousel-control-next"
			type="button"
			data-bs-target="#mainCarousel"
			data-bs-slide="next"
		>
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
		</button>
	</div>
);

export default Carousel;

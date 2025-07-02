import tvImg from "../assets/img/shopping/tv.webp";
import vinhoImg from "../assets/img/mercado/vinho.webp";
import celularImg from "../assets/img/shopping/celular.webp";
import ferreroImg from "../assets/img/mercado/ferrero-rocher.webp";
import protetorImg from "../assets/img/drogaria/protetor-solar.webp";
import Carousel from "../components/Carousel";

const HomePage = () => {
	const cards = [
		{ img: tvImg, alt: "TV" },
		{ img: vinhoImg, alt: "Vinho" },
		{ img: celularImg, alt: "Celular" },
		{ img: ferreroImg, alt: "Ferrero Rocher" },
		{ img: protetorImg, alt: "Protetor Solar" },
	];
	return (
		<>
			<Carousel />
			<div className="container my-5 w-100">
				<div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
					{cards.map((c, i) => (
						<div className="col" key={i}>
							<img src={c.img} className="card-img-top" alt={c.alt} />
						</div>
					))}
				</div>
			</div>
			<div style={{ height: 200 }} />
		</>
	);
};

export default HomePage;

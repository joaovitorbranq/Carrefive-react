import TvImg from "../assets/img/shopping/tv.webp";
import VinhoImg from "../assets/img/mercado/vinho.webp";
import CelularImg from "../assets/img/shopping/celular.webp";
import FerreroImg from "../assets/img/mercado/ferrero-rocher.webp";
import ProtetorImg from "../assets/img/drogaria/protetor-solar.webp";
import Carousel from "../components/Carousel";
import Banner1 from "../assets/img/banners/banner1.webp";
import Banner2 from "../assets/img/banners/banner2.webp";
import Banner3 from "../assets/img/banners/banner3.webp";

const HomePage = () => {
	const banners = [
		{ src: Banner1, alt: "Banner 1" },
		{ src: Banner2, alt: "Banner 2" },
		{ src: Banner3, alt: "Banner 3" },
	];
	const cards = [
		{ img: TvImg, alt: "TV" },
		{ img: VinhoImg, alt: "Vinho" },
		{ img: CelularImg, alt: "Celular" },
		{ img: FerreroImg, alt: "Ferrero Rocher" },
		{ img: ProtetorImg, alt: "Protetor Solar" },
	];
	return (
		<>
			<Carousel items={banners} />
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

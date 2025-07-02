import React, { useEffect, useState } from "react";

type CarouselItem = {
	src: string;
	alt?: string;
};

type CarouselProps = {
	items: CarouselItem[];
};

const Carousel = ({ items }: CarouselProps) => {
	const [activeIdx, setActiveIdx] = useState(0);

	const goTo = (idx: number) => setActiveIdx(idx);
	const prev = () =>
		setActiveIdx((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
	const next = () =>
		setActiveIdx((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));

	useEffect(() => {
		// auto-play a cada 4s (opcional, remova se não quiser autoplay)
		const interval = setInterval(() => next(), 4000);
		return () => clearInterval(interval);
		// eslint-disable-next-line
	}, [activeIdx, items.length]);

	return (
		<div className="position-relative" style={{ marginTop: 56 }}>
			<div className="carousel-inner">
				{items.map((item, idx) => (
					<div
						key={idx}
						className={`carousel-item${idx === activeIdx ? " active" : ""}`}
						style={{ display: idx === activeIdx ? "block" : "none" }}
					>
						<img
							src={item.src}
							className="d-block w-100"
							alt={item.alt || `Slide ${idx + 1}`}
						/>
					</div>
				))}
			</div>
			{/* Indicadores */}
			<div className="carousel-indicators" style={{ bottom: 10 }}>
				{items.map((_, idx) => (
					<button
						key={idx}
						type="button"
						className={activeIdx === idx ? "active" : ""}
						aria-current={activeIdx === idx}
						aria-label={`Slide ${idx + 1}`}
						style={{
							width: 12,
							height: 12,
							borderRadius: "50%",
							margin: "0 4px",
							border: 0,
							background: activeIdx === idx ? "#222" : "#bbb",
							opacity: 0.7,
						}}
						onClick={() => goTo(idx)}
					/>
				))}
			</div>
			{/* Botões */}
			<button
				className="carousel-control-prev"
				type="button"
				style={{
					position: "absolute",
					top: "50%",
					left: 10,
					transform: "translateY(-50%)",
					zIndex: 2,
					background: "none",
					border: "none",
				}}
				aria-label="Anterior"
				onClick={prev}
			>
				<span className="carousel-control-prev-icon" aria-hidden="true" />
			</button>
			<button
				className="carousel-control-next"
				type="button"
				style={{
					position: "absolute",
					top: "50%",
					right: 10,
					transform: "translateY(-50%)",
					zIndex: 2,
					background: "none",
					border: "none",
				}}
				aria-label="Próximo"
				onClick={next}
			>
				<span className="carousel-control-next-icon" aria-hidden="true" />
			</button>
		</div>
	);
};

export default Carousel;

const Footer = () => (
	<footer className="bg-light text-center text-lg-start border-top mt-5">
		<div className="container p-4">
			<h5 className="mb-3">Siga-nos nas redes sociais</h5>
			<div className="d-flex gap-4 fs-4">
				<a href="#" className="text-dark" aria-label="Facebook">
					<i className="fa-brands fa-facebook"></i>
				</a>
				<a href="#" className="text-dark" aria-label="Instagram">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="#" className="text-dark" aria-label="YouTube">
					<i className="fab fa-youtube"></i>
				</a>
			</div>
		</div>
		<div
			className="text-center text-muted py-3"
			style={{ backgroundColor: "#f8f9fa" }}
		>
			© 2025 Carrefive. Todos os direitos reservados.
		</div>
	</footer>
);

export default Footer;

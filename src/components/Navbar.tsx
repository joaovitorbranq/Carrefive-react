import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import React from "react";

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = React.useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div className="container-fluid pe-2 ps-5">
				<Link className="navbar-brand" to="/">
					<img
						src={Logo}
						alt="Logo"
						width={30}
						height={30}
						className="d-inline-block align-text-top me-2"
					/>
					Carrefive
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="navbar-nav">
						<div
							className={`nav-item dropdown me-3${dropdownOpen ? " show" : ""}`}
							onMouseEnter={() => setDropdownOpen(true)}
							onMouseLeave={() => setDropdownOpen(false)}
						>
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="produtosDropdown"
								role="button"
								aria-expanded={dropdownOpen}
								onClick={(e) => e.preventDefault()}
							>
								Produtos
							</a>
							<ul className={`dropdown-menu${dropdownOpen ? " show" : ""}`}>
								<li>
									<NavLink className="dropdown-item" to="/shopping">
										Shopping
									</NavLink>
								</li>
								<li>
									<NavLink className="dropdown-item" to="/mercado">
										Mercado
									</NavLink>
								</li>
								<li>
									<NavLink className="dropdown-item" to="/drogaria">
										Drogaria
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

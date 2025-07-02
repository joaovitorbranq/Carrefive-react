import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import React, { useState } from "react";

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleToggleMenu = () => setMenuOpen((open) => !open);
	const handleNavClick = () => setMenuOpen(false); // Fecha ao clicar em algum link

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div className="container-fluid pe-2 ps-5">
				<Link className="navbar-brand" to="/" onClick={handleNavClick}>
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
					aria-controls="navbarNav"
					aria-expanded={menuOpen}
					aria-label="Toggle navigation"
					onClick={handleToggleMenu}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
					id="navbarNav"
				>
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
									<NavLink
										className="dropdown-item"
										to="/shopping"
										onClick={handleNavClick}
									>
										Shopping
									</NavLink>
								</li>
								<li>
									<NavLink
										className="dropdown-item"
										to="/mercado"
										onClick={handleNavClick}
									>
										Mercado
									</NavLink>
								</li>
								<li>
									<NavLink
										className="dropdown-item"
										to="/drogaria"
										onClick={handleNavClick}
									>
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

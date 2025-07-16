import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const { login } = useUser();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			const user = await loginUser({ email, password });
			login(user);
			navigate("/"); // redireciona para home
		} catch (err: any) {
			if (err.response?.status === 401) {
				setError("Email ou senha inválidos");
			} else {
				setError("Erro ao tentar logar. Tente novamente.");
			}
		}
	};

	return (
		<div className="container mt-5 pt-5" style={{ maxWidth: 400 }}>
			<h2 className="mb-4 text-center">Login</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Senha
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				{error && <div className="alert alert-danger">{error}</div>}

				<button type="submit" className="btn btn-primary w-100">
					Entrar
				</button>
			</form>
		</div>
	);
};

export default LoginPage;

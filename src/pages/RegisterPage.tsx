import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const validationSchema = z
	.object({
		name: z.string().min(1, "Nome é obrigatório"),
		email: z.string().email("Email inválido"),
		password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

type RegisterFormData = z.infer<typeof validationSchema>;

const RegisterPage = () => {
	const { register: registerUser } = useRegister();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		watch,
	} = useForm<RegisterFormData>({
		resolver: zodResolver(validationSchema),
		mode: "onChange",
	});

	const onSubmit = async (data: z.infer<typeof validationSchema>) => {
		try {
			await registerUser({
				name: data.name,
				email: data.email,
				password: data.password,
				isAdmin: false,
				birthDate: new Date().toISOString().slice(0, 10),
			});
			alert("Usuário cadastrado com sucesso!");
			reset();
			navigate("/");
		} catch (error) {
			console.error("Erro ao cadastrar usuário:", error);
			alert("Erro ao cadastrar usuário.");
		}
	};

	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div className="w-100" style={{ maxWidth: "500px" }}>
				<h2 className="mb-4 text-center">Criar Conta</h2>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Nome
						</label>
						<input
							id="name"
							type="text"
							className={`form-control ${errors.name ? "is-invalid" : ""}`}
							{...register("name")}
						/>
						{errors.name && (
							<div className="invalid-feedback">{errors.name.message}</div>
						)}
					</div>

					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							E-mail
						</label>
						<input
							id="email"
							type="email"
							className={`form-control ${errors.email ? "is-invalid" : ""}`}
							{...register("email")}
						/>
						{errors.email && (
							<div className="invalid-feedback">{errors.email.message}</div>
						)}
					</div>

					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Senha
						</label>
						<input
							id="password"
							type="password"
							className={`form-control ${errors.password ? "is-invalid" : ""}`}
							{...register("password")}
						/>
						{errors.password && (
							<div className="invalid-feedback">{errors.password.message}</div>
						)}
					</div>

					<div className="mb-4">
						<label htmlFor="confirmPassword" className="form-label">
							Confirmar Senha
						</label>
						<input
							id="confirmPassword"
							type="password"
							className={`form-control ${
								errors.confirmPassword ? "is-invalid" : ""
							}`}
							{...register("confirmPassword")}
						/>
						{errors.confirmPassword && (
							<div className="invalid-feedback">
								{errors.confirmPassword.message}
							</div>
						)}
					</div>

					<button type="submit" className="btn btn-primary" disabled={!isValid}>
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;

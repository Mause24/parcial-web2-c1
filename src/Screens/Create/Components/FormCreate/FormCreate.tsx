import { Text } from "@/Components"
import clsx from "clsx"
import React from "react"
import { useFormCreate } from "./useFormCreate"

export const FormCreate: React.FC = () => {
	const {
		categoriesArray,
		formErrors,
		formData,
		handleChange,
		handleSubmit,
	} = useFormCreate()

	return (
		<div className="max-w-md mx-auto mt-8 border-2 p-4 rounded-lg min-w-[250px] w-[50%]">
			<Text type="h2" props={{ className: clsx("text-center") }}>
				Form Create
			</Text>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="titulo" className="block text-gray-700">
						Id *
					</label>
					<input
						type="number"
						id="id"
						name="id"
						value={formData.id}
						onChange={handleChange}
						className={`form-input border-2 rounded mt-1 block w-full ${formErrors.titulo ? "border-red-500" : ""}`}
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="titulo" className="block text-gray-700">
						Título *
					</label>
					<input
						type="text"
						id="titulo"
						name="titulo"
						value={formData.titulo}
						onChange={handleChange}
						className={`form-input border-2 rounded mt-1 block w-full ${formErrors.titulo ? "border-red-500" : ""}`}
					/>
					{formErrors.titulo && (
						<p className="text-red-500 text-xs mt-1">
							{formErrors.titulo}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="descripcion"
						className="block text-gray-700"
					>
						Descripción *
					</label>
					<input
						type="text"
						id="descripcion"
						name="descripcion"
						value={formData.descripcion}
						onChange={handleChange}
						className={`form-textarea border-2 rounded mt-1 block w-full ${formErrors.descripcion ? "border-red-500" : ""}`}
					/>
					{formErrors.descripcion && (
						<p className="text-red-500 text-xs mt-1">
							{formErrors.descripcion}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="categoria" className="block text-gray-700">
						Categoría *
					</label>
					<select
						id="categoria"
						name="categoria"
						value={formData.categoria}
						onChange={handleChange}
						className={`form-select border-2 rounded mt-1 block w-full`}
					>
						{categoriesArray.map(category => (
							<option key={category.value} value={category.value}>
								{category.label}
							</option>
						))}
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="equipo" className="block text-gray-700">
						Equipo *
					</label>
					<input
						type="text"
						id="equipo"
						name="equipo"
						value={formData.equipo}
						onChange={handleChange}
						className={`form-input border-2 rounded mt-1 block w-full ${formErrors.equipo ? "border-red-500" : ""}`}
					/>
					{formErrors.equipo && (
						<p className="text-red-500 text-xs mt-1">
							{formErrors.equipo}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="link" className="block text-gray-700">
						Link *
					</label>
					<input
						type="text"
						id="link"
						name="link"
						value={formData.link}
						onChange={handleChange}
						className={`form-input border-2 rounded mt-1 block w-full ${formErrors.link ? "border-red-500" : ""}`}
					/>
					{formErrors.link && (
						<p className="text-red-500 text-xs mt-1">
							{formErrors.link}
						</p>
					)}
				</div>
				<div className="mt-6 flex justify-center">
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	)
}

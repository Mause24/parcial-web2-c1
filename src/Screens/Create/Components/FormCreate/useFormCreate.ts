import { Categories } from "@/Interfaces"
import { useCardData } from "@/Store"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const useFormCreate = () => {
	const [formData, setFormData] = useState({
		id: 0,
		titulo: "",
		descripcion: "",
		categoria: Categories.table,
		equipo: "",
		link: "",
		imagen: "",
	})
	const { addMoreCards } = useCardData()
	const navigate = useNavigate()

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
		validateField(name, value)
	}

	const resetForm = () => {
		setFormData({
			id: 0,
			titulo: "",
			descripcion: "",
			categoria: Categories.table,
			equipo: "",
			link: "",
			imagen: "",
		})
	}

	const getCategoryName = (value: number): Categories | undefined => {
		for (const key in Categories) {
			if (isNaN(Number(key))) {
				const enumValue = Categories[key as keyof typeof Categories]
				if (enumValue === value) {
					return enumValue
				}
			}
		}
		return undefined
	}

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				const imageDataUrl = reader.result as string
				setFormData(prevState => ({
					...prevState,
					imagen: imageDataUrl,
				}))
			}
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		addMoreCards([
			{
				id: formData.id,
				category:
					getCategoryName(Number(formData.categoria)) ??
					Categories.table,
				team: formData.equipo,
				description: formData.descripcion,
				link: formData.link,
				sport: formData.titulo,
				image:
					formData.imagen !== ""
						? formData.imagen
						: "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
			},
		])
		resetForm()
		Swal.fire("CREADO!", "El deporte fue creado correctamente", "success")
		navigate("/")
	}

	const [formErrors, setFormErrors] = useState({
		titulo: "",
		descripcion: "",
		equipo: "",
		link: "",
	})

	const validateField = (name: string, value: string) => {
		let error = ""
		switch (name) {
			case "titulo":
				if (value.length < 3 || value.length > 20) {
					error = "El título debe tener entre 3 y 20 caracteres"
				}
				break
			case "descripcion":
				if (value.length < 50 || value.length > 200) {
					error =
						"La descripción debe tener entre 50 y 200 caracteres"
				}
				break
			case "equipo":
				if (value.length < 3 || value.length > 15) {
					error = "El equipo debe tener entre 3 y 15 caracteres"
				}
				break
			case "link":
				if (value.length < 10 || value.length > 150) {
					error = "El link debe tener entre 10 y 150 caracteres"
				}
				break
			default:
				break
		}
		setFormErrors(prevErrors => ({
			...prevErrors,
			[name]: error,
		}))
	}

	const categoriesArray = useMemo(
		() =>
			Object.keys(Categories)
				.filter(
					key =>
						!isNaN(
							Number(Categories[key as keyof typeof Categories])
						)
				)
				.map(key => ({
					label: key,
					value: Categories[key as keyof typeof Categories],
				})),
		[Categories]
	)

	return {
		categoriesArray,
		handleChange,
		formData,
		handleImageChange,
		formErrors,
		handleSubmit,
	}
}

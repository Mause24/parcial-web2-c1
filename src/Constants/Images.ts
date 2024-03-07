const importAll = async (r: Record<string, any>) => {
	const images: { [key: string]: string } = {}
	for (const key in r) {
		if (r.hasOwnProperty(key)) {
			const imageName = RegExp(/([^\\/]+)\.\w+$/).exec(key)?.[1] ?? "" // Extraer el nombre del archivo sin extensión
			const module = await r[key]()
			images[imageName] = module.default
		}
	}
	return images
}

const imageFiles = import.meta.glob("../Assets/Images/*.png")
const imagesResolved = await importAll(imageFiles)

export const IMAGES = {
	logo: imagesResolved["logo"],
}

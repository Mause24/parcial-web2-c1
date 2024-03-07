import { useState } from "react"

export const useHeader = () => {
	const [hovering, setHovering] = useState<number>(-1)

	const onHoverIn = (index: number) => {
		setHovering(index)
	}

	const onHoverOut = () => {
		setHovering(-1)
	}

	const linksArray = [
		{
			id: 1,
			name: "Create",
			route: "/create",
		},
		{
			id: 2,
			name: "Content",
			route: "/",
		},
	]

	return {
		hovering,
		onHoverIn,
		onHoverOut,
		linksArray,
	}
}

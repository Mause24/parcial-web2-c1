import { useEffect, useState } from "react"
import { Item, SelectProps } from "./Select.types"

export const useSelect = (props: SelectProps) => {
	const {
		data,
		onChange,
		value = {
			label: "Seleccione una opcion",
			value: -1,
		},
	} = props

	const [valueSelected, setValueSelected] = useState(value)
	const [isOpen, setIsOpen] = useState(false)
	const [hovering, setHovering] = useState(-1)

	const onHoverIn = (index: number) => () => setHovering(index)

	const onHoverOut = () => setHovering(-1)

	const onOpenSelect = () => {
		setIsOpen(true)
	}
	const onCloseSelect = () => {
		setIsOpen(false)
	}

	const onChangeValue = (item: Item) => () => {
		setValueSelected(item)
		onChange(item)
		onCloseSelect()
	}

	useEffect(() => {
		let mounted = false

		if (mounted) {
			setValueSelected(value)
		}

		return () => {
			mounted = true
		}
	}, [value])

	return {
		data,
		valueSelected,
		isOpen,
		onOpenSelect,
		onChangeValue,
		onCloseSelect,
		hovering,
		onHoverIn,
		onHoverOut,
	}
}

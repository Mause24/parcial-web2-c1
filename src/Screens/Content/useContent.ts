import { Item } from "@/Components"
import { Categories } from "@/Interfaces"
import { useCardData } from "@/Store"
import { useMemo, useState } from "react"

export const useContent = () => {
	const [filter, setFilter] = useState<Item | undefined>(undefined)
	const { addMoreCards, data } = useCardData()

	const onChangeFilter = (item: Item) => {
		setFilter(item)
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
		data,
		filter,
		categoriesArray,
		addMoreCards,
		onChangeFilter,
	}
}

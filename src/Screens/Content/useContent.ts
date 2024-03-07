import { getAllSports } from "@/Api"
import { Item } from "@/Components"
import { Categories, SportTeam } from "@/Interfaces"
import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"

export const useContent = () => {
	const location = useLocation()
	const [filter, setFilter] = useState<Item | undefined>(undefined)
	const [cardsData, setCardsData] = useState<SportTeam[]>([])

	const onChangeFilter = (item: Item) => {
		setFilter(item)
	}

	const getCardsData = async () => {
		try {
			const data = await getAllSports()
			setCardsData(data)
		} catch (error) {
			console.error(error)
		}
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

	useEffect(() => {
		let mounted = true

		if (mounted) {
			getCardsData()
		}

		return () => {
			mounted = false
		}
	}, [location])

	return {
		cardsData,
		filter,
		categoriesArray,
		onChangeFilter,
	}
}

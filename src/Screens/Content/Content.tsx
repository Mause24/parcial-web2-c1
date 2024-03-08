import { Card, Select } from "@/Components"
import clsx from "clsx"
import { useContent } from "./useContent"

export const Content = (): JSX.Element => {
	const { data, filter, onChangeFilter, categoriesArray } = useContent()

	return (
		<div
			className={clsx(
				"w-full",
				"flex",
				"flex-col",
				"py-4",
				"justify-start",
				"items-center"
			)}
		>
			<div className={clsx("flex", "mb-3")}>
				<Select
					value={filter}
					onChange={onChangeFilter}
					data={categoriesArray}
				/>
			</div>

			<div
				className={clsx(
					"flex",
					"gap-x-2",
					"gap-y-4",
					"flex-wrap",
					"justify-center"
				)}
			>
				{data
					.filter(item =>
						filter ? item.category === filter.value : true
					)
					.map(item => (
						<Card key={item.id} {...item} />
					))}
			</div>
		</div>
	)
}

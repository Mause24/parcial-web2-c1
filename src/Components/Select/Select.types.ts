export interface SelectProps {
	onChange: (item: Item) => void
	data: Item[]
	value?: Item
}

export interface Item {
	label: string
	value: number
}

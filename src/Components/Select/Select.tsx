import clsx from "clsx"
import { Text } from "../Text"
import { SelectProps } from "./Select.types"
import { useSelect } from "./useSelect"

export const Select = (props: SelectProps): JSX.Element => {
	const {
		data,
		onChangeValue,
		valueSelected,
		onCloseSelect,
		onOpenSelect,
		isOpen,
		hovering,
		onHoverIn,
		onHoverOut,
	} = useSelect(props)

	return (
		<div
			className={clsx(
				"relative",
				"flex",
				"flex-col",
				"min-w-[250px]",
				"bg-white",
				"px-4",
				"py-1",
				"shadow-lg",
				"border",
				"border-gray-200",
				isOpen ? clsx("rounded-t-md") : "rounded-md"
			)}
		>
			<button
				onClick={isOpen ? onCloseSelect : onOpenSelect}
				className={clsx(
					"flex",
					"flex-col",
					"cursor-pointer",
					"select-none"
				)}
			>
				<Text color="black" type="span">
					{valueSelected.label}
				</Text>
			</button>
			{data.length <= 0 ? (
				<div>
					<Text color="black" type="span">
						Empty List
					</Text>
				</div>
			) : (
				<div
					className={clsx(
						"absolute",
						"flex",
						"flex-col",
						"w-full",
						"left-0",
						"top-[102%]",
						"origin-top",
						"bg-white",
						"transition-all",
						"duration-300",
						"custom_scrollbar",
						"max-h-[297px]",
						"overflow-auto",
						isOpen ? "scale-y-100" : "scale-y-0"
					)}
				>
					{data
						.filter(item => item.value !== valueSelected.value)
						.map((item, index) => (
							<button
								onMouseEnter={onHoverIn(item.value)}
								onMouseLeave={onHoverOut}
								onClick={onChangeValue(item)}
								key={item.value}
								className={clsx(
									"flex",
									"flex-col",
									"cursor-pointer",
									"select-none",
									"text-center",
									"px-4",
									"py-1",
									index !==
										data.filter(
											item =>
												item.value !==
												valueSelected.value
										).length -
											1 &&
										clsx("border-gray-200", "border-b"),
									hovering === item.value &&
										clsx("bg-gray-200")
								)}
							>
								<Text color="black" type="span">
									{item.label}
								</Text>
							</button>
						))}
				</div>
			)}
		</div>
	)
}

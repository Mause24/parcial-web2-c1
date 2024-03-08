import { Categories } from "@/Interfaces"
import clsx from "clsx"
import { entries, upperFirst } from "lodash"
import { Link } from "react-router-dom"
import { Text } from "../Text"
import { CardProps } from "./Card.interface"
import { useCard } from "./useCard"

export const Card = (props: CardProps): JSX.Element => {
	const { description, image, link, sport, team, category } = useCard(props)

	return (
		<div
			className={clsx(
				"w-[32.9%]",
				"min-w-[320px]",
				"justify-center",
				"rounded-lg",
				"shadow-xl",
				"bg-white"
			)}
		>
			<img
				className={clsx(
					"w-full",
					"h-60",
					"rounded-t-lg",
					"object-cover"
				)}
				src={image}
				alt="profile_img"
			/>
			<div className={clsx("p-6", "flex", "flex-col", "gap-y-4")}>
				<Text
					type="h5"
					props={{
						className: clsx(
							"my-5",
							"text-xl",
							"font-bold",
							"leading-tight",
							"text-neutral-50",
							"text-center",
							"dark:text-neutral-800"
						),
					}}
				>
					{sport}
				</Text>
				<Text
					type="p"
					props={{
						className: clsx(
							"text-base",
							"text-neutral-200",
							"dark:text-neutral-600"
						),
					}}
				>
					{description}
				</Text>
				<div>
					<Text
						type="span"
						props={{
							className: clsx(
								"text-base",
								"font-bold",
								"text-neutral-200",
								"dark:text-neutral-600"
							),
						}}
					>
						Categoria:
					</Text>
					<Text
						type="span"
						props={{
							className: clsx(
								"text-base",
								"text-neutral-200",
								"dark:text-neutral-600"
							),
						}}
					>
						{upperFirst(
							entries(Categories).find(
								item => category === item[1]
							)?.[0]
						) ?? ""}
					</Text>
				</div>
				<Link to={link} target="_blank">
					<Text
						type="span"
						props={{
							className: clsx(
								"text-base",
								"!text-blue-800",
								"dark:text-neutral-600"
							),
						}}
					>
						{team}
					</Text>
				</Link>
			</div>
		</div>
	)
}

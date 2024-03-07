import { IMAGES } from "@/Constants"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { Text } from "../Text"
import { useHeader } from "./useHeader"

export const Header = (): JSX.Element => {
	const { hovering, onHoverIn, onHoverOut, linksArray } = useHeader()

	return (
		<header
			className={clsx(
				"w-full",
				"py-2",
				"px-4",
				"bg-blue-600",
				"text-white",
				"flex",
				"justify-between",
				"items-center"
			)}
		>
			<div
				className={clsx(
					"flex",
					"justify-center",
					"items-center",
					"gap-x-2"
				)}
			>
				<img src={IMAGES.logo} className={clsx("h-14")} alt="logo" />
				<Text
					props={{ className: clsx("max-md:!text-lg") }}
					color="white"
					type="h1"
				>
					Soccer Corp
				</Text>
			</div>

			<nav className={clsx("flex")}>
				<ul className={clsx("flex", "px-2", "gap-x-4")}>
					{linksArray.map(item => (
						<li key={item.id} className={clsx("flex", "relative")}>
							<Link
								onMouseEnter={() => onHoverIn(item.id)}
								onMouseLeave={onHoverOut}
								to={item.route}
								className={clsx(
									"flex",
									"w-full",
									"h-full",
									//PROPERTIES OF THE AFTER LINE OF THE LINKS
									"after:content-['']",
									"after:w-full",
									"after:border-b-[3px]",
									"after:absolute",
									"after:origin-left",
									"after:transition-all",
									"after:duration-[400ms]",
									"after:bottom-0",
									"after:left-0",
									hovering === item.id
										? "after:scale-x-100"
										: "after:scale-x-0"
								)}
							>
								<Text
									props={{
										className: clsx("max-md:!text-base"),
									}}
									color="white"
									size="lg"
									type="span"
								>
									{item.name}
								</Text>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

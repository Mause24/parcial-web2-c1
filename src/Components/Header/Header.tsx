import { IMAGES } from "@/Constants"
import clsx from "clsx"
import { Link } from "react-router-dom"

export const Header = (): JSX.Element => {
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
			<div className={clsx("flex", "justify-center", "items-center")}>
				<img src={IMAGES.logo} className={clsx("h-14")} alt="logo" />
				<h1>soy un header</h1>
			</div>

			<nav>
				<ul>
					<li>
						<Link to="/">Content</Link>
					</li>
					<li>
						<Link to="/create">Create</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

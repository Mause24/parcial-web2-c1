import clsx from "clsx"
import { FormCreate } from "./Components"

export const Create = (): JSX.Element => {
	return (
		<div
			className={clsx("flex", "justify-center", "items-center", "h-lvh")}
		>
			<FormCreate />
		</div>
	)
}

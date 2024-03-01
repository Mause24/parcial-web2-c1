import { MissingRoute } from "@/Components"
import { Content } from "@/Screens"
import { Route, Routes } from "react-router-dom"

export const GeneralRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Content />} />

			<Route path="/create" element={<div>Create</div>} />

			<Route path="*" element={<MissingRoute />} />
		</Routes>
	)
}

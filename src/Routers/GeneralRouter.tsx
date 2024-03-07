import { MissingRoute } from "@/Components"
import { Content, Create } from "@/Screens"
import { Route, Routes } from "react-router-dom"

export const GeneralRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Content />} />

			<Route path="/create" element={<Create />} />

			<Route path="*" element={<MissingRoute />} />
		</Routes>
	)
}

import { Route, Routes } from "react-router-dom"
import { Layout, MissingRoute } from "./Components"
import { GeneralRouter } from "./Routers"

function App() {
	return (
		<Layout>
			<Routes>
				<Route index path="/*" element={<GeneralRouter />} />

				<Route path="*" element={<MissingRoute />} />
			</Routes>
		</Layout>
	)
}

export default App

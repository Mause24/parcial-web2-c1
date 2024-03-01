import { Footer } from "../Footer"
import { Header } from "../Header"
import { LayoutProps } from "./Layout.types"
import { useLayout } from "./useLayout"

export const Layout = (props: LayoutProps): JSX.Element => {
	const { children } = useLayout(props)

	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

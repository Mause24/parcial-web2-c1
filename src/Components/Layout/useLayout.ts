import { LayoutProps } from "./Layout.types"

export const useLayout = (props: LayoutProps) => {
	const { children } = props

	return { children }
}

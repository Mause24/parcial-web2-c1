import { CardProps } from "./Card.interface"

export const useCard = (props: CardProps) => {
	return {
		...props,
	}
}

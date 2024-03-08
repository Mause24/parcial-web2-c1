import { SportTeam } from "@/Interfaces"

export interface CardDataStoreProps {
	data: SportTeam[]
	addMoreCards: (newCard: SportTeam[]) => void
}

import { SportTeam } from "@/Interfaces"

export const getAllSports = async (): Promise<SportTeam[]> => {
	const data: SportTeam[] = await (await fetch("src/Data/Cards.json")).json()

	if (data) {
		return data
	}

	throw new Error("FAIL_FETCHING_DATA")
}

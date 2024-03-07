export interface SportTeam {
	id: number
	sport: string
	team: string
	description: string
	image: string
	link: string
	category: Categories
}

export enum Categories {
	"teamwork" = 1,
	"table" = 2,
	"vehicles" = 3,
}

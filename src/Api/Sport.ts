import { SportTeam } from "@/Interfaces"

const DATA = [
	{
		id: 1,
		sport: "Football",
		team: "Atlético Nacional",
		description:
			"Atlético Nacional is a professional football team from Colombia based in Medellín. Founded in 1947, it is one of the most successful clubs in the country, having won numerous league titles and cups throughout its history.",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Escudo_del_Atl%C3%A9tico_Nacional.svg/1200px-Escudo_del_Atl%C3%A9tico_Nacional.svg.png",
		link: "https://en.wikipedia.org/wiki/Atl%C3%A9tico_Nacional",
		category: 1,
	},
	{
		id: 2,
		sport: "Cycling",
		team: "Equipo EPM-Scott",
		description:
			"The Equipo EPM-Scott is a professional cycling team from Colombia. It has participated in various international competitions, including the Tour de France and the Vuelta a España, and has achieved multiple victories in different stages and classifications of these competitions.",
		image: "https://i.ibb.co/89FGHTq/EPM-Scott.jpg",
		link: "https://en.wikipedia.org/wiki/Equipo_EPM-Scott",
		category: 2,
	},
	{
		id: 3,
		sport: "Baseball",
		team: "Toros de Sincelejo",
		description:
			"The Toros de Sincelejo is a professional baseball team from Colombia. It participates in the Colombian Professional Baseball League and has won several championships in its history. It is one of the most prominent teams in the league.",
		image: "https://i.ibb.co/mvB9z9R/Toros-de-Sincelejo.jpg",
		link: "https://en.wikipedia.org/wiki/Toros_de_Sincelejo",
		category: 1,
	},
	{
		id: 4,
		sport: "Volleyball",
		team: "Liga Santander",
		description:
			"The Liga Santander is a professional volleyball league in Colombia. It features several prominent teams, including the national volleyball team. The league has contributed to the development and promotion of volleyball in the country.",
		image: "https://i.ibb.co/hy7pQY6/Liga-Santander-voleibol.jpg",
		link: "https://en.wikipedia.org/wiki/Liga_Santander_(volleyball)",
		category: 1,
	},
	{
		id: 5,
		sport: "Tennis",
		team: "Equipo Colsanitas",
		description:
			"The Equipo Colsanitas is a professional tennis team from Colombia. It has produced several standout tennis players over the years and has represented the country in numerous international tournaments, including the Grand Slam events.",
		image: "https://i.ibb.co/mB7Zm4t/Colsanitas.jpg",
		link: "https://en.wikipedia.org/wiki/Equipo_Colsanitas",
		category: 1,
	},
	{
		id: 6,
		sport: "Swimming",
		team: "Equipo Natación Colombia",
		description:
			"The Equipo Natación Colombia is a professional swimming team from Colombia. It has competed in various world championships and has won medals in international events. It is one of the top teams in the region.",
		image: "https://i.ibb.co/M75B8b7/Natacion-Colombia.jpg",
		link: "https://en.wikipedia.org/wiki/Equipo_Nataci%C3%B3n_Colombia",
		category: 2,
	},
	{
		id: 7,
		sport: "Rugby",
		team: "Cafeteros Rugby Club",
		description:
			"The Cafeteros Rugby Club is a professional rugby team from Colombia. It has participated in various international tournaments and has represented the country in regional competitions. It is one of the top teams in South America.",
		image: "https://i.ibb.co/5BTHwC0/Cafeteros-Rugby.jpg",
		link: "https://en.wikipedia.org/wiki/Cafeteros_Rugby_Club",
		category: 1,
	},
	{
		id: 8,
		sport: "Athletics",
		team: "Equipo Atletismo Colombia",
		description:
			"The Equipo Atletismo Colombia is a professional athletics team from Colombia. It has participated in various world championships and has won medals in international events. It is one of the top teams in Latin America.",
		image: "https://i.ibb.co/fNryzkr/Atletismo-Colombia.jpg",
		link: "https://en.wikipedia.org/wiki/Equipo_Atletismo_Colombia",
		category: 2,
	},
	{
		id: 9,
		sport: "Table Tennis",
		team: "Equipo Ping Pong Colombia",
		description:
			"The Equipo Ping Pong Colombia is a professional table tennis team from Colombia. It has participated in various international tournaments and has won medals in international events. It is one of the top teams in Latin America.",
		image: "https://i.ibb.co/P1HhW39/Ping-Pong-Colombia.jpg",
		link: "https://en.wikipedia.org/wiki/Equipo_Ping_Pong_Colombia",
		category: 3,
	},
]

export const getAllSports = (): SportTeam[] => DATA

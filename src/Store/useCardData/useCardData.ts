import { Categories, SportTeam } from "@/Interfaces"
import { create } from "zustand"
import { CardDataStoreProps } from "./useCardData.types"

export const useCardData = create<CardDataStoreProps>(set => {
	const addMoreCards = (newCards: SportTeam[]) => {
		set(state => ({ data: [...state.data, ...newCards] }))
	}

	return {
		data: [
			{
				id: 1,
				sport: "Football",
				team: "Atlético Nacional",
				description:
					"Atlético Nacional is a professional football team from Colombia based in Medellín. Founded in 1947, it is one of the most successful clubs in the country, having won numerous league titles and cups throughout its history.",
				image: "https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg",
				link: "https://en.wikipedia.org/wiki/Atl%C3%A9tico_Nacional",
				category: Categories.teamwork,
			},
			{
				id: 2,
				sport: "Cycling",
				team: "Equipo EPM-Scott",
				description:
					"The Equipo EPM-Scott is a professional cycling team from Colombia. It has participated in various international competitions, including the Tour de France and the Vuelta a España, and has achieved multiple victories in different stages and classifications of these competitions.",
				image: "https://s2.sportstatics.com/relevo/www/multimedia/202308/18/media/tour%20de%20francia_20230818174922.jpg",
				link: "https://en.wikipedia.org/wiki/Equipo_EPM-Scott",
				category: Categories.vehicles,
			},
			{
				id: 3,
				sport: "Baseball",
				team: "Toros de Sincelejo",
				description:
					"The Toros de Sincelejo is a professional baseball team from Colombia. It participates in the Colombian Professional Baseball League and has won several championships in its history. It is one of the most prominent teams in the league.",
				image: "https://www.collinsdictionary.com/images/full/baseball_557405302_1000.jpg",
				link: "https://en.wikipedia.org/wiki/Toros_de_Sincelejo",
				category: Categories.teamwork,
			},
			{
				id: 4,
				sport: "Volleyball",
				team: "Liga Santander",
				description:
					"The Liga Santander is a professional volleyball league in Colombia. It features several prominent teams, including the national volleyball team. The league has contributed to the development and promotion of volleyball in the country.",
				image: "https://s1.significados.com/foto/voleibol-og.jpg",
				link: "https://en.wikipedia.org/wiki/Liga_Santander_(volleyball)",
				category: Categories.teamwork,
			},
			{
				id: 5,
				sport: "Tennis",
				team: "Equipo Colsanitas",
				description:
					"The Equipo Colsanitas is a professional tennis team from Colombia. It has produced several standout tennis players over the years and has represented the country in numerous international tournaments, including the Grand Slam events.",
				image: "https://reviewed-com-res.cloudinary.com/image/fetch/s--UJ2sGByA--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1597356287543/GettyImages-1171084311.jpg",
				link: "https://en.wikipedia.org/wiki/Equipo_Colsanitas",
				category: Categories.teamwork,
			},
			{
				id: 6,
				sport: "Swimming",
				team: "Equipo Natación Colombia",
				description:
					"The Equipo Natación Colombia is a professional swimming team from Colombia. It has competed in various world championships and has won medals in international events. It is one of the top teams in the region.",
				image: "https://concepto.de/wp-content/uploads/2019/06/natacion-e1562943144215.jpg",
				link: "https://en.wikipedia.org/wiki/Equipo_Nataci%C3%B3n_Colombia",
				category: Categories.vehicles,
			},
			{
				id: 7,
				sport: "Rugby",
				team: "Cafeteros Rugby Club",
				description:
					"The Cafeteros Rugby Club is a professional rugby team from Colombia. It has participated in various international tournaments and has represented the country in regional competitions. It is one of the top teams in South America.",
				image: "https://e00-especiales-marca.uecdn.es/juegos-olimpicos/images/enciclopedia/rugby/foto-grande.jpg",
				link: "https://en.wikipedia.org/wiki/Cafeteros_Rugby_Club",
				category: Categories.teamwork,
			},
			{
				id: 8,
				sport: "Athletics",
				team: "Equipo Atletismo Colombia",
				description:
					"The Equipo Atletismo Colombia is a professional athletics team from Colombia. It has participated in various world championships and has won medals in international events. It is one of the top teams in Latin America.",
				image: "https://concepto.de/wp-content/uploads/2015/03/atletismo-e1550017721661.jpg",
				link: "https://en.wikipedia.org/wiki/Equipo_Atletismo_Colombia",
				category: Categories.vehicles,
			},
			{
				id: 9,
				sport: "Table Tennis",
				team: "Equipo Ping Pong Colombia",
				description:
					"The Equipo Ping Pong Colombia is a professional table tennis team from Colombia. It has participated in various international tournaments and has won medals in international events. It is one of the top teams in Latin America.",
				image: "https://img.rtve.es/imagenes/tenis-mesa-dominio-anfitriones/1215596800633.jpg",
				link: "https://en.wikipedia.org/wiki/Equipo_Ping_Pong_Colombia",
				category: Categories.table,
			},
		],
		addMoreCards,
	}
})

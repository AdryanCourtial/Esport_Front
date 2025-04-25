import axiosClient from "../config/axios"
import { Tournament } from "../interfaces/tounrnament"

const getAllTournament = async (): Promise<Tournament[]> => {
    try {
        const response = await axiosClient.get("/tournament")

        if (response.status === 200) return response.data

        throw new Error("Une Erreur est survenue lors de la récupération de tous les tournois" + response.statusText)

    } catch (error) {

        throw new Error(error as string)

    }
}

const getOneTournament = async (uuid: string): Promise<Tournament> => {
    try {
        const response = await axiosClient.get("/tournament/" + uuid)

        if (response.status === 200) return response.data

        throw new Error("Une Erreur est survenue lors de la récupération du tournois" + response.statusText)

    } catch (error) {

        throw new Error(error as string)

    }
}

const FetchTournament = {
    getAllTournament,
    getOneTournament
}

export {
    FetchTournament
}
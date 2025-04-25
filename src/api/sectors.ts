import axiosClient from "../config/axios"
import { Sector } from "../interfaces/sectors"

const getSectors = async (): Promise<Sector[]> => {
    try {
        const response = await axiosClient.get("auth/sectors")

        if (response.status === 200) return response.data

        throw new Error("Une Erreur est survenue lors de la récupération de tous l" + response.statusText)

    } catch (error) {

        throw new Error(error as string)

    }
}

const FetchSectors = {
    getSectors,
}

export {
    FetchSectors
}
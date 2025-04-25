import axiosClient from "../config/axios"
import { Tournament } from "../interfaces/tounrnament"
import { UserInfo } from "../interfaces/users"

const getDiscordConnexion = async (): Promise<Tournament[]> => {
    try {
        const response = await axiosClient.get("/auth/discord")

        if (response.status === 200) return response.data

        throw new Error("Une Erreur est survenue lors de la récupération de tous les tournois" + response.statusText)

    } catch (error) {

        throw new Error(error as string)

    }
}

const getInformationUser = async (): Promise<UserInfo> => {
    try {
        const response = await axiosClient.get("/auth/userinfo", { withCredentials: true })

        if (response.status === 200) return response.data

        throw new Error("Une Erreur est survenue lors de la récupération de vos données" + response.statusText)

    } catch (error) {

        throw new Error(error as string)

    }
}

const ConfirmProfil = async (data: any): Promise<Tournament[]> => {
    try {
        const response = await axiosClient.post("/auth/update-profile", data, { withCredentials: true })

        if (response.status === 200) return response.data

        throw new Error("Une Erreur est survenue lors de la récupération de vos données" + response.statusText)

    } catch (error) {

        throw new Error(error as string)

    }
}

const FetchAuthentification = {
    getDiscordConnexion,
    getInformationUser,
    ConfirmProfil
}

export {
    FetchAuthentification
}
import { Game } from "./game"

export interface Tournament {
    id?: string
    name?: string
    description?: string | null
    tournamentType: TournamentType
    game: Game
    registrationStart: string
    registrationEnd: string
    registrationDate: string
}

export interface TournamentType {
    id?: string
    name?: string
}
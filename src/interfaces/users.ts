export interface UserInfo {
    username: string
    lastName: string
    firstName: string
    avatar: string
    discordId: string
    role: Role
}

export interface Role {
    id : string
    name: string
}
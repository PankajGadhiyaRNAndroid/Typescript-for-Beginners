import React, { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type USerContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<USerContextType | null>(null)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>

}
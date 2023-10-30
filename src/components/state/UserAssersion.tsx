import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}
export const UserAssersion = () => {
    const [user, setuser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setuser({
            name: 'Pankaj',
            email: 'pgadhiya@gmail.com'
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User is {user.name}</div>
            <div>Email is{user.email}</div>
        </div>
    )
}
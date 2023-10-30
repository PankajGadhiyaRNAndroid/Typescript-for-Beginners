import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    const [user, setuser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setuser({
            name: 'Pankaj',
            email: 'pgadhiya@gmail.com'
        })
    }
    const handleLogout = () => {
        setuser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user?.name}</div>
            <div>Email is{user?.email}</div>
        </div>
    )
}
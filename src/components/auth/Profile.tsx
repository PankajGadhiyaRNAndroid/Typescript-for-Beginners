export type ProfileProp = {
    name: string
}

export const Profile = ({ name }: ProfileProp) => {
    return <div>Private profile component. Name is {name}</div>
}
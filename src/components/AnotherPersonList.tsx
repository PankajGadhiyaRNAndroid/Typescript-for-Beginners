// This example contain pass props as array 
import { Name } from "./AnotherPerson.types"
type PersonListProps = {
    names: Name[]
}
export const AnotherPersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.names.map(name => {
                    return (
                        <h2 key={name.first}>{name.first} {name.last}</h2>
                    )

                })
            }
        </div>
    )
}
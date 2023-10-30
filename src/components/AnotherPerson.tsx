//  This example contains pass props as object
import { AnotherPersonProps } from "./AnotherPerson.types"

export const AnotherPerson = (props: AnotherPersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}
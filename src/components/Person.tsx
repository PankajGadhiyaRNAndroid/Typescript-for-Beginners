//  This example contains pass props as object

type PersonProps = {
    name: {
        first: String,
        last: String
    }
}
export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}
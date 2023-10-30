// Without Event
type ButtonProps = {
    handleClick: () => void
    handleWithEventClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    handleWithParamClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={props.handleClick}>Click</button>
            <button onClick={props.handleWithEventClick}>Click</button>
            <button onClick={(event) => { props.handleWithParamClick(event, 1) }}>Click</button>
        </div>
    )
}
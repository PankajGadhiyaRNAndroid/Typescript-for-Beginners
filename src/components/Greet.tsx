// This example contains pass diffrent type of props 

type GreetProps = {
    name: string,
    messagecount?: number,
    isLoggedIn: boolean

}
export const Greet = (props: GreetProps) => {
    const { messagecount = 0 } = props
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `This is demo by ${props.name} have ${messagecount} unread message`
                        : 'Welcome Guest'
                }
            </h2>

        </div>
    )
}
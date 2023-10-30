type ButtonProp = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProp) => {
    return <button className={`class-with${variant}`}{...rest}> {children}</button >
}
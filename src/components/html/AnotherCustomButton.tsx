
type ButtonProp = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const AnotherCustomButton = ({ variant, children, ...rest }: ButtonProp) => {
    return <button className={`class-with${variant}`}{...rest}> {children}</button >
}
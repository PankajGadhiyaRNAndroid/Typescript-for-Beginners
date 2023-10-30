type CustomInputProp = React.ComponentProps<'input'>
export const CustomInput = (props: CustomInputProp) => {
    return <input {...props} />

}
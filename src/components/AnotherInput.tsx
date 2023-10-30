import React from "react"

type InputProps = {

    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export const AnotherInput = ({ value, handleChange }: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);

    }
    return <input value={value} onChange={handleInputChange} type="text" />
}